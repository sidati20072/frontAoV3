import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Facture} from '../Models/Facture.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  host: string = 'http://localhost:8180/';

  constructor(private httpClient: HttpClient, private authService: AuthentificationService) {
  }

  getFactures(id) {

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };

    return this.httpClient.get<Facture>(this.host + 'factures/search/findByEntreprise?entrepriseId=' + id, httpOptions);
  }
}
