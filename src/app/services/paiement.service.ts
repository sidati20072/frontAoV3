import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  host: string = 'http://localhost:8180/';

  constructor(private httpClient: HttpClient, private authService: AuthentificationService) {
  }
  chargeCard(tok: string , montant) {

    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
        token: tok,
        amount: montant
      })
    };
    return this.httpClient.post<any>(this.host + 'payment/charge', {}, httpOptions);
  }
}
