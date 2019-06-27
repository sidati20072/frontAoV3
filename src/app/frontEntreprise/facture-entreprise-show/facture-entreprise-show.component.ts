import { Component, OnInit } from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatSnackBar} from '@angular/material';
import {PlanService} from '../../services/plan.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {FactureService} from '../../services/facture.service';
import {Facture} from '../../Models/Facture.model';

@Component({
  selector: 'app-facture-entreprise-show',
  templateUrl: './facture-entreprise-show.component.html',
  styleUrls: ['./facture-entreprise-show.component.scss']
})
export class FactureEntrepriseShowComponent implements OnInit {
  style = {
    '.customer-print-personal-details': {
      backgroundColor: '#eee',
    }
  };
id;
facture: Facture;
  constructor(private ngxService: NgxUiLoaderService, public snackbar: MatSnackBar,
              private router: Router,  private userService: UserService, private factureService: FactureService ) { }

  ngOnInit() {
    this.ngxService.start();
    this.id = window.localStorage.getItem('idFactureEntreprise');
    window.localStorage.removeItem('idFactureEntreprise');
    this.factureService.getFacture(this.id).subscribe(value => {
      this.facture = value;
      console.log(this.facture);
    },error => {
      this.snackbar.open('error to fetch facture', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
    this.ngxService.stop();
  }


  printComponent(cmpName) {
    const printContent = document.getElementById('print-section');
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }

}
