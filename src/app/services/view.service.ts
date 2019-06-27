import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Favoris} from '../Models/Favoris.model';
import {View} from '../Models/View.model';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  host: string = 'http://localhost:8280/';

  constructor(private httpClient: HttpClient, private authService: AuthentificationService ) {}

  getView(idOffre){

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };

    const data = {
      offreId: idOffre
    };

    return this.httpClient.post<View>(this.host + 'views/create', data, httpOptions);
  }
}
