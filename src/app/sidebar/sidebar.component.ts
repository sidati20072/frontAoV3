import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {UserService} from "../services/user.service";
import {User} from "../Models/User.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;

  currentUser : User;
  ngOnInit() {
   this.userService.getCurrentUser().subscribe(
       value => {
         this.currentUser = value;
         console.log(value);
       },error1 => {
         console.log("erreur de recuperation current user");

       }
   );
  }

  constructor(private authservice: AuthentificationService , private userService : UserService) {}


  isAdmin() {
    return this.authservice.isAdmin();
  }

  isUser() {
    return this.authservice.isUser();
  }

  isAuthenticated() {

    return this.authservice.isAuthenticated();
  }
}
