import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig , private authservice : AuthentificationService) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
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
