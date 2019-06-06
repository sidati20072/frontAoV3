import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {AuthentificationService} from '../services/authentification.service';
import {User} from '../Models/User.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  currentUser : User;

  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig , private authservice : AuthentificationService , private userService : UserService) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
        value => {
          this.currentUser = value;
        },error1 => {
          console.log("erreur de recuperation current user");

        }
    );
  }

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
