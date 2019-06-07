import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule, MatSnackBar} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgForm} from '@angular/forms';
import {OffreService} from '../../../services/offre.service';
import {CategorieService} from '../../../services/categorie.service';
import {Categorie} from '../../../Models/Categorie.model';
import {EntrepriseService} from '../../../services/entreprise.service';
import {Entreprise} from '../../../Models/Entreprise.model';
import {User} from '../../../Models/User.model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {UploadFileService} from '../../../services/upload-file.service';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.scss']
})
export class CreateOffreComponent implements OnInit {
  categories: Categorie[];
  currentUser: User;
    selectedFiles: FileList;
    currentFileUpload: File;
    imageLink : string;
    imageSelected: string;

    constructor( public  snackbar: MatSnackBar , private offreService : OffreService , private categorieService : CategorieService ,
               private entrepriseService: EntrepriseService , private userService: UserService , private router : Router , private ngxService: NgxUiLoaderService,
                 private uploadService: UploadFileService) { }

  ngOnInit() {
      this.userService.getCurrentUser().subscribe(
          value => {this.currentUser = value;
                          this.loadCategorie();
              console.log(this.currentUser);
          },error1 => {
              console.log('erreur fetch current User');
          });
  }
  onSubmit(f: NgForm) {

      f.value['dateExecution'] = f.value['dateExecution'].toLocaleDateString();
      f.value['dateLimite'] = f.value['dateLimite'].toLocaleDateString();
      f.value['entreprise'] = this.currentUser.entreprise.id;
      f.value['user'] = this.currentUser.id;
      f.value['file'] = this.imageLink;
      console.log(f.value);
      this.offreService.createOffre(f.value).subscribe(
           value => {
             this.router.navigate(['/offres']);
           },error1 => {
             console.log(error1);

           }
       );
  }

    selectFile(event) {
        this.selectedFiles = event.target.files;
        this.imageSelected = event.target.files.item(0).name;
        this.upload();

    }

    upload() {
        this.ngxService.start(); // start foreground loading with 'default' id
        this.currentFileUpload = this.selectedFiles.item(0);
        this.uploadService.pushFileToStorage(this.currentFileUpload , 0 , 'offre')
            .subscribe(value => {
               this.imageLink = value.link;
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

    loadCategorie(){
    this.categorieService.getCategories().subscribe(
        value =>{
          this.categories = value['_embedded']['categories'];
          console.log(this.categories);
        },error1 => {
            console.log(error1);
            console.log('erreur load Categories');
        });
  }

}
