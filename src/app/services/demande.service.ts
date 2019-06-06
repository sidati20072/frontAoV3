import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Demande} from '../Models/Demande.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private httpClient: HttpClient, private authService: AuthentificationService ) {}
  host: string = 'http://localhost:8280/';

  getDemandesByUser(userId){
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    return this.httpClient.get<Demande[]>(this.host + 'demandes/search/findByMembre?membreId=' + userId, httpOptions);
  }

  getDemandesByOffre(offreId){
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    return this.httpClient.get<Demande[]>(this.host + 'demandes/search/findByOffre?offreId=' + offreId, httpOptions);
  }

  demandeAction(toDo , id){
    const data = {
      action : toDo,
      demandeId : id
    };
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    return this.httpClient.post<any>(this.host + 'demandes/action' , data, httpOptions);

  }
}
