import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-navbar-public',
  templateUrl: './navbar-public.component.html',
  styleUrls: ['./navbar-public.component.scss']
})
export class NavbarPublicComponent implements OnInit {


  constructor(private authservice : AuthentificationService) { }

  ngOnInit() {
  }
  isFournisseur() {
    return this.authservice.isFournisseur();
  }
 isAuthenticated() {
    return this.authservice.isAuthenticated();
  }

  logout(){
    this.authservice.logout();
  }
}
