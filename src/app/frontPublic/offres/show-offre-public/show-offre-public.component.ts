import { Component, OnInit } from '@angular/core';
import {FavorisService} from '../../../services/favoris.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Offre} from '../../../Models/Offre.model';
import {OffreService} from '../../../services/offre.service';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../../services/user.service';
import {User} from '../../../Models/User.model';
import {Favoris} from '../../../Models/Favoris.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {UploadFileService} from '../../../services/upload-file.service';

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
  selectedFiles: FileList;
  currentFileUpload: File;
  imageLink: string;
  imageSelected: string;
  displayForm = false;
  devis;
  canPostuler = true;
  constructor(private ngxService: NgxUiLoaderService,private favorisService : FavorisService, private offreService : OffreService,
              private uploadService: UploadFileService, private router: Router, private route: ActivatedRoute , public  snackbar: MatSnackBar , private userService : UserService) { }

  ngOnInit() {
    this.ngxService.start()
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getOffre(this.id);

      this.getCurrentUser();
    },error1 => {
      console.log('error to fetch id offre');
    });
    this.ngxService.stop();
  }

  onAddFavoris(){
    this.ngxService.start();
      this.favorisService.addFavoris(this.f).subscribe(value => {
        this.getFavoris(this.user.id , this.id);
      }, error1 => {
        this.snackbar.open('error add favoris ', 'ok', {
          duration: 3000,
          panelClass: ['blue-snackbar']

        });
      });
      this.ngxService.stop();
  }
  onRemoveFavoris(){
    this.ngxService.start();
    this.favorisService.removeFavoris(this.favoris.id).subscribe(value => {
      this.getFavoris(this.user.id , this.id);
      this.isfavoris = false;
    },error1 => {
      this.snackbar.open('error remove favoris ', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
    this.ngxService.stop();
  }
  getOffre(id) {
    this.offreService.getOffre(id).subscribe(
        value => {
          this.offre = value;
          const currentDate = new Date();
          const limitDate = new Date(this.offre.dateLimite);
          if (currentDate.getTime() < limitDate.getTime()){
            this.canPostuler = false; }
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
      this.f = new Favoris(this.user.id, this.id);
      this.getFavoris(this.user.id , this.id);
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
    form.value['devis'] = this.devis;
    console.log(form.value);
    this.offreService.addDemande(form.value).subscribe(value => {
      this.snackbar.open('demande ajouté', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.displayForm = false;
      },error1 => {
      console.log(error1);
      this.snackbar.open('erreur ', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.displayForm = false;
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.imageSelected = event.target.files.item(0).name;
    this.upload();

  }
  upload() {
    this.ngxService.start(); // start foreground loading with 'default' id
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload , 0 , 'module').subscribe(media => {
      this.devis = media.link;
      this.ngxService.stop();
    },error1 => {
      console.log(error1);
      this.snackbar.open('', 'error ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.ngxService.stop();

    });
    this.ngxService.stop();

    this.selectedFiles = undefined;
  }
}
