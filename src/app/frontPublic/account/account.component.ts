import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private authservice : AuthentificationService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authservice.logout();
    this.router.navigate(['/public/accueil']);
  }
}
