import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../Models/User.model';
import {Entreprise} from '../Models/Entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private httpClient: HttpClient) { }
  host2: string = 'http://localhost:8180/';

  getEntreprise(id: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        //    'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Entreprise>(this.host2 + 'entreprises/' + id, httpOptions);
  }

  getEntreprises() {
    const httpOptions = {
      headers: new HttpHeaders({
        //    'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Entreprise[]>(this.host2 + 'entreprises', httpOptions);
  }

  updateEntreprise(id: number, value: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        //    'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.patch(this.host2 + 'entreprises/' + id, value, httpOptions);    }

}
