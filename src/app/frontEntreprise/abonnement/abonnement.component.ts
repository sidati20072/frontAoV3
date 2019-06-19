import { Component, OnInit } from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatSnackBar} from '@angular/material';
import {ModuleService} from '../../services/module-service.service';
import {Router} from '@angular/router';
import {PlanService} from '../../services/plan.service';
import {Plan} from '../../Models/Plan.model';
import {MatRadioChange} from '@angular/material/typings/radio';
import {Abonnement} from '../../Models/Abonnement.model';
import {PaiementService} from '../../services/paiement.service';
import {UserService} from '../../services/user.service';
import {User} from '../../Models/User.model';
import {AbonnementService} from '../../services/abonnement.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export class AbonnementComponent implements OnInit {

  plans: Plan[];
  plan: Plan;
  abonnement: Abonnement = new Abonnement();
  payment = false;
  currentUser: User;
  total:number = 0;
  constructor(private ngxService: NgxUiLoaderService, public snackbar: MatSnackBar, private planService: PlanService,
              private router: Router, private paiementService : PaiementService, private userService: UserService,
              private abonnementService : AbonnementService) { }

  ngOnInit() {
    this.ngxService.start();
    this.planService.getPlans().subscribe(value => {
      this.plans = value['_embedded']['plans'];
      this.getCurrentUser();
    }, error1 => {
      this.snackbar.open('error to fetch plans', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
    this.ngxService.stop();
  }

  onChoose(pla){
    this.plan = pla;
    this.abonnement.plan = pla;
    this.payment = true;
  }


  radioChange($event: MatRadioChange) {
    this.abonnement.periode = $event.value;
    this.abonnement.total = +(this.abonnement.periode * this.abonnement.plan.prix)  + +this.total;
    console.log('total' + this.abonnement.total);
    console.log('plan prix' + this.abonnement.plan.prix);
  }

  onSubmit(f) {
    this.ngxService.start();
    (window as any).Stripe.card.createToken({
      number: f.value['cardNumber'],
      exp_month: '10',
      exp_year: '23',
      cvc: f.value['cardCvv']
    }, (status: number, response: any) => {
      if (status === 200) {
        const token = response.id;
        const data = {
          refPayment: token,
          address: f.value['address1'],
          postal: f.value['postal'],
          city: f.value['city'],
          paymentMethode: 'Stripe'
        };
        this.paiementService.chargeCard(token, this.abonnement.periode).subscribe(value => {
          this.abonnement.entreprise = this.currentUser.entreprise;
          this.saveAbonnement(this.abonnement , data);
        },error1 => {
          this.snackbar.open(error1.error.message, 'error ok', {
            duration: 3000,
            panelClass: ['blue-snackbar']
          });
          console.log(error1);
        });
      } else {
        this.snackbar.open(response.error.message, 'error ok', {
          duration: 3000,
          panelClass: ['blue-snackbar']
        });
      }
    });
    this.ngxService.stop();
  }

  saveAbonnement(abonnement , data){
    console.log(this.abonnement);
    this.abonnementService.createModule(this.abonnement, data).subscribe(value => {

      this.router.navigate(['/users']);
    },error1=>{
      this.snackbar.open('error to fetch current User', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
      console.log(error1);
    });



  }

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(value => {
      this.currentUser = value;
      let moduleTotal = 0;
      if (this.currentUser.entreprise.modules) {
        this.currentUser.entreprise.modules.forEach(mod => {
          //this.total = this.total + value.prix;
          moduleTotal+= mod.prix;
        });
        this.total = moduleTotal;
      }
    },error1 => {
      this.snackbar.open('error to fetch current User', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }
}
