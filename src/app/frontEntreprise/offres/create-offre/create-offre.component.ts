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

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.scss']
})
export class CreateOffreComponent implements OnInit {
  categories: Categorie[];
  currentUser: User;
  constructor( public  snackbar: MatSnackBar , private offreService : OffreService , private categorieService : CategorieService ,
               private entrepriseService: EntrepriseService , private userService: UserService) { }

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
      console.log(f.value);

      f.value['dateExecution'] = f.value['dateExecution'].toLocaleDateString();
      f.value['dateLimite'] = f.value['dateLimite'].toLocaleDateString();
      f.value['entreprise'] = this.currentUser.entreprise.id;
      f.value['user'] = this.currentUser.id;
      console.log(f.value);

      this.offreService.createOffre(f.value).subscribe(
           value => {
             console.log('sended');
           },error1 => {
             console.log('error');

           }
       );
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
