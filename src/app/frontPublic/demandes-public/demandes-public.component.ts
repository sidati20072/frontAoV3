import { Component, OnInit } from '@angular/core';
import {FavorisService} from '../../services/favoris.service';
import {UserService} from '../../services/user.service';
import {DemandeService} from '../../services/demande.service';
import {User} from '../../Models/User.model';
import {Demande} from '../../Models/Demande.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-demandes-public',
  templateUrl: './demandes-public.component.html',
  styleUrls: ['./demandes-public.component.scss']
})
export class DemandesPublicComponent implements OnInit {
  currentUser: User;
  demandes: Demande[];
  constructor( private demandeService: DemandeService , private userService: UserService, public  snackbar: MatSnackBar) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(value => {
      this.currentUser = value;
      console.log(value);
    },error1 => {
      this.snackbar.open('erreur fetch current user','ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
    console.log('before');
    this.demandeService.getDemandesByUser(3).subscribe(value => {
      this.demandes = value['_embedded']['demandes'];
      console.log('success demande here');
      console.log(this.demandes);
      console.log(value);
    },error1 => {
      console.log('error demande here');

      this.snackbar.open('error fetch demandes','ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
    console.log('after');
  }
}
