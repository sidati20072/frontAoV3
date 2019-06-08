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
  constructor(private ngxService: NgxUiLoaderService, public snackbar: MatSnackBar, private planService: PlanService,
              private router: Router, private paiementService : PaiementService) { }

  ngOnInit() {
    this.planService.getPlans().subscribe(value => {
      this.plans = value['_embedded']['plans'];
    }, error1 => {
      this.snackbar.open('error to fetch plans', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });


  }

  onChoose(pla){
    this.plan = pla;
    this.abonnement.plan = pla;
    this.payment = true;
  }


  radioChange($event: MatRadioChange) {
    this.abonnement.periode = $event.value;
    this.abonnement.total = this.abonnement.periode * this.abonnement.plan.prix;
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
        this.paiementService.chargeCard(token, this.abonnement.periode).subscribe(value => {
          this.saveAbonnement();
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

  saveAbonnement(){

  }
}
