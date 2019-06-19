import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Abonnement} from '../Models/Abonnement.model';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  host: string = 'http://localhost:8180/';

  constructor(private httpClient: HttpClient, private authService: AuthentificationService) {
  }

  createModule(abonnement: Abonnement , others) {

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    const data = {
      dataDebut : abonnement.dateDebut,
      dateFin : abonnement.dateFin,
      periode : abonnement.periode,
      total: abonnement.total,
      details: abonnement.details,
      refPayment: others.refPayment,
      address: others.address,
      city: others.city,
      postal: others.postal,
      paymentMethode: others.paymentMethode,
      entrepriseId: abonnement.entreprise.id,
      planId: abonnement.plan.id
    };
    return this.httpClient.post<any>(this.host + 'abonnements/save', data, httpOptions);
  }
}
