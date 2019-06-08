import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Parametre} from '../Models/Parametre.model';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
  host: string = 'http://localhost:8180/';
  id = 1;

  constructor(private httpClient: HttpClient, private authService: AuthentificationService) {
  }

  getParametre() {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Parametre>(this.host + 'configs/' + this.id, httpOptions);
  }


  editParametre(parametre) {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.patch(this.host + 'configs/' + this.id, parametre, httpOptions);
  }
}
