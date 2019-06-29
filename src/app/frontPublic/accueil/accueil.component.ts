import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {OffreService} from '../../services/offre.service';
import {Offre} from '../../Models/Offre.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  offres : Offre[];

  constructor(private ngxService: NgxUiLoaderService, private router: Router, public  snackbar: MatSnackBar, private offreService: OffreService) { }

  ngOnInit() {
    this.ngxService.start();
    this.getOffres();
    this.ngxService.stop();
  }

  getOffres() {
    this.offreService.getAllOffres().subscribe(value => {
    this.offres = value['_embedded']['offres'];
    }, error1 => {
      this.snackbar.open('erreur feetch offres', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
  }
}
