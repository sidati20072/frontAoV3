import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Observable} from 'rxjs';
import {Offre} from '../Models/Offre.model';
import {Demande} from '../Models/Demande.model';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  host: string = 'http://localhost:8280/';

  constructor(private httpClient: HttpClient , private authService: AuthentificationService) { }


  createOffre(offre){

    const httpOptions = {
      headers: new HttpHeaders({
       // 'Authorization': this.authService.jwt,
      })
    };
      return this.httpClient.post<Offre>(this.host + 'create_offre', offre, httpOptions);
  }

  getOffres(){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    const link = 'offres/search/findByEntreprise?entrepriseId=' + 1;
    return this.httpClient.get<Offre[]>(this.host + link, httpOptions);

  }

  getOffre(id){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Offre>(this.host + 'offres/' + id, httpOptions);

  }


  addDemande(demande){
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    return this.httpClient.post<Demande>(this.host + 'demandes', demande, httpOptions);
  }


  getOffres2(idEntreprise){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    const link = 'offres/search/findByEntreprise?entrepriseId=' + idEntreprise;
    return this.httpClient.get<Offre[]>(this.host + link, httpOptions);

  }

  getAllOffres(){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    const link = 'offres';
    return this.httpClient.get<Offre[]>(this.host + link, httpOptions);

  }
}
