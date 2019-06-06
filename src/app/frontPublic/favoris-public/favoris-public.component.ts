import { Component, OnInit } from '@angular/core';
import {FavorisService} from '../../services/favoris.service';
import {Favoris} from '../../Models/Favoris.model';
import {UserService} from '../../services/user.service';
import {User} from '../../Models/User.model';

@Component({
  selector: 'app-favoris-public',
  templateUrl: './favoris-public.component.html',
  styleUrls: ['./favoris-public.component.scss']
})
export class FavorisPublicComponent implements OnInit {

  favorises: any[];
  currentUser : User;
  constructor( private favorisService: FavorisService , private userService : UserService) { }

  ngOnInit() {
    console.log('favoris');
    this.userService.getCurrentUser().subscribe(value => {
      this.currentUser = value;
      this.getFavorises(this.currentUser.id);
    },error1 => {
      console.log('erreur fetch current user');
    });
  }

  getFavorises(userId){
    this.favorisService.getFavorisesByUser(userId).subscribe(value => {
      this.favorises = value['_embedded']['favorises'];
      console.log(value);
      console.log(this.favorises);

    },error1 => {
      console.log('error to fetch favorises');
    });
  }

}
