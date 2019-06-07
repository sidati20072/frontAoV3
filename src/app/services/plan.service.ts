import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Plan} from '../Models/Plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  host: string = 'http://localhost:8180/';

  constructor(private httpClient: HttpClient, private authService: AuthentificationService) {
  }

  createPlans(plan) {

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    return this.httpClient.post<Plan>(this.host + 'plans', plan, httpOptions);
  }

  getPlans() {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Plan[]>(this.host + 'plans', httpOptions);
  }

  getPlan(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Plan>(this.host + 'plans/' + id, httpOptions);
  }


  deletePlan(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.delete<Plan>(this.host + 'plans/' + id, httpOptions);
  }

  editPlan(id: string, plan) {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.patch(this.host + 'plans/' + id, plan, httpOptions);
  }

}
