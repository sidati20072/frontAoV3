import { Component, OnInit } from '@angular/core';
import {OffreService} from '../../../services/offre.service';
import {Offre} from '../../../Models/Offre.model';
import {MatSnackBar} from '@angular/material';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {CategorieService} from '../../../services/categorie.service';
import {Categorie} from '../../../Models/Categorie.model';

@Component({
  selector: 'app-list-offres-public',
  templateUrl: './list-offres-public.component.html',
  styleUrls: ['./list-offres-public.component.scss']
})
export class ListOffresPublicComponent implements OnInit {

  offres: Offre[];
  objet = '';
  offresResult : Offre[];
  type = '';
  city = '';
  categorie ;
  categories: Categorie[];
  constructor( private offreService: OffreService , public  snackbar: MatSnackBar, private ngxService: NgxUiLoaderService,
               private categorieService: CategorieService) { }
  panelOpenState = false;


  ngOnInit() {

    this.ngxService.start();
    this.offreService.getOffres().subscribe(value => {
      this.offres = value['_embedded']['offres'];
      this.offresResult = this.offres ;
      this.getCategories();
      console.log(this.offres);
    }, error1 => {
      this.snackbar.open('error fetch Offres','ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
    this.ngxService.stop();
  }

  selectKeyword(event) {
    this.filtrer();
    console.log(event);
  }
  filtrer(){
    this.offresResult = this.offres.filter(offre => offre.objet.includes(this.objet))
         .filter(offre => offre.type.includes(this.type))
         .filter(offre => offre.city.includes(this.city));

  }
  getCategories(){
    this.categorieService.getCategories().subscribe(value => {
      this.categories = value['_embedded']['categories'];;
    },error1 => {

      this.snackbar.open('error fetch Offres','ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });

  }
}

