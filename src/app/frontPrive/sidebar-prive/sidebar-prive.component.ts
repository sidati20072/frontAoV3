import { Component, OnInit } from '@angular/core';
import {User} from '../../Models/User.model';
import {AuthentificationService} from '../../services/authentification.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-sidebar-prive',
  templateUrl: './sidebar-prive.component.html',
  styleUrls: ['./sidebar-prive.component.scss']
})
export class SidebarPriveComponent implements OnInit {

  public samplePagesCollapsed = true;
  panelOpenState = false;

  currentUser: User;
  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
        value => {
          this.currentUser = value;
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

  logout(){
    this.authservice.logout();
  }
}
