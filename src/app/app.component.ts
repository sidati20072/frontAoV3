import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AuthentificationService} from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'aoffre';

    constructor(private authservice: AuthentificationService) {}

    ngOnInit(): void {
        this.authservice.loadToken();
    }

    isAdmin() {
        return this.authservice.isAdmin();
    }

    isUser() {
        console.log('isUser' + this.authservice.isUser());
        return this.authservice.isUser();
    }

    isAuthenticated() {

        return this.authservice.isAuthenticated();
    }
}

