import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Offre} from '../Models/Offre.model';
import {AuthentificationService} from './authentification.service';
import {Favoris} from '../Models/Favoris.model';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  host: string = 'http://localhost:8280/';

  constructor(private httpClient: HttpClient, private authService: AuthentificationService ) {}

    addFavoris(favoris){

      const httpOptions = {
        headers: new HttpHeaders({
          // 'Authorization': this.authService.jwt,
        })
      };
      return this.httpClient.post<Favoris>(this.host + 'favorises', favoris, httpOptions);
    }

  removeFavoris(id : number){

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    return this.httpClient.delete(this.host + 'favorises/' + id, httpOptions);
  }

  checkFavoris(favoris : Favoris){

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    return this.httpClient.get<Favoris>(this.host + 'favorises/search/findByMembreAndOffre?membreId=' + favoris.userId + '&offreId=' + favoris.offreId , httpOptions);
  }
  getFavorisesByUser(userId){
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    return this.httpClient.get<any[]>(this.host + 'favorises/search/findByMembre?membreId=' + userId, httpOptions);
  }
}
