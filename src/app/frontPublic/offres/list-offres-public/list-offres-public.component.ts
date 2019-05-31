import { Component, OnInit } from '@angular/core';
import {OffreService} from '../../../services/offre.service';
import {Offre} from '../../../Models/Offre.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-list-offres-public',
  templateUrl: './list-offres-public.component.html',
  styleUrls: ['./list-offres-public.component.scss']
})
export class ListOffresPublicComponent implements OnInit {

  offres: Offre[];
  constructor( private offreService: OffreService , public  snackbar: MatSnackBar) { }
  panelOpenState = false;


  ngOnInit() {
    this.offreService.getOffres().subscribe(value => {
      this.offres = value['_embedded']['offres'];
      console.log(this.offres);
    }, error1 => {
      this.snackbar.open('error fetch Offres','ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }

}
