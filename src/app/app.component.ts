import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AuthentificationService} from './services/authentification.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
    Event,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router } from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ParameterService} from './services/parameter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'aoffre';
  parameter;
  online = true;
    constructor(private ngxService: NgxUiLoaderService , private authservice: AuthentificationService ,
                private _loadingBar: SlimLoadingBarService, private _router: Router  ) {
        this._router.events.subscribe((event: Event) => {
            this.navigationInterceptor(event);
        });
    }

    private navigationInterceptor(event: Event): void {
        if (event instanceof NavigationStart) {
            this._loadingBar.start();
        }
        if (event instanceof NavigationEnd) {
            this._loadingBar.complete();
        }
        if (event instanceof NavigationCancel) {
            this._loadingBar.stop();
        }
        if (event instanceof NavigationError) {
            this._loadingBar.stop();
        }
    }
    ngOnInit(): void {
        this.ngxService.start(); // start foreground loading with 'default' id

        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 1000);

        // OR
       // this.ngxService.startBackground('do-background-things');
        // Do something here...
        //this.ngxService.stopBackground('do-background-things');

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

