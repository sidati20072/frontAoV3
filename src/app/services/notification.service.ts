import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Entreprise} from '../Models/Entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }
  host2: string = 'http://localhost:8180/';

  getLastNotfications() {
    const httpOptions = {
      headers: new HttpHeaders({
        //    'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<any>(this.host2 + 'notifications/search/findByLastNotification', httpOptions);
  }

}
