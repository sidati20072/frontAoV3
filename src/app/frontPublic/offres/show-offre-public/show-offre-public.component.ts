import { Component, OnInit } from '@angular/core';
import {FavorisService} from '../../../services/favoris.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Offre} from '../../../Models/Offre.model';
import {OffreService} from '../../../services/offre.service';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../../services/user.service';
import {User} from '../../../Models/User.model';
import {Favoris} from '../../../Models/Favoris.model';

@Component({
  selector: 'app-show-offre-public',
  templateUrl: './show-offre-public.component.html',
  styleUrls: ['./show-offre-public.component.scss']
})
export class ShowOffrePublicComponent implements OnInit {
  id;
  isfavoris = false;
  favoris : Favoris;
  offre : Offre;
  user : User;
  f : Favoris;
  displayForm = false;
  constructor(private favorisService : FavorisService, private offreService : OffreService,
              private router: Router, private route: ActivatedRoute , public  snackbar: MatSnackBar , private userService : UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getOffre(this.id);
    this.getCurrentUser();
    this.f = new Favoris(this.user.id, this.id);

    this.getFavoris(this.user.id , this.id);

  }

  onAddFavoris(){
      this.favorisService.addFavoris(this.f).subscribe(value => {
        this.getFavoris(this.user.id , this.id);
      }, error1 => {
        this.snackbar.open('error add favoris ', 'ok', {
          duration: 3000,
          panelClass: ['blue-snackbar']

        });
      });
  }

  onRemoveFavoris(){
    this.favorisService.removeFavoris(this.favoris.id).subscribe(value => {
      this.getFavoris(this.user.id , this.id);
    },error1 => {
      this.snackbar.open('error remove favoris ', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }
  getOffre(id) {
    this.offreService.getOffre(id).subscribe(
        value => {
          this.offre = value;
        }, error1 => {
          this.snackbar.open('error fetch Offre', 'ok', {
            duration: 3000,
            panelClass: ['blue-snackbar']

          });
        });
  }

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(value => {
      this.user = value;
    }, error1 => {
      this.snackbar.open('error to fetch Current User', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }

  getFavoris(userId , offreId){
    this.favorisService.checkFavoris(this.f).subscribe(value => {
      this.favoris = value;
      if (this.favoris) { this.isfavoris = true; }
      else { this.isfavoris = false; }
    }, error1 => {
      this.snackbar.open('not favoris', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }

  showForm(){
    this.displayForm = true;
  }

  onSubmit(form){

    this.offreService.addDemande(form.value).subscribe(value => {
      this.snackbar.open('demande ajouté', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.displayForm = false;
      },error1 => {
      this.snackbar.open('erreur ', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.displayForm = false;
    });
  }
}
