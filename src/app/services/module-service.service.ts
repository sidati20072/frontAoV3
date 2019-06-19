import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Offre} from '../Models/Offre.model';
import {Module} from '../Models/Module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  host: string = 'http://localhost:8180/';

  constructor(private httpClient: HttpClient , private authService: AuthentificationService) { }

  createModule(module){

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };
    return this.httpClient.post<Module>(this.host + 'modules', module, httpOptions);
  }

  getModules(){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Module[]>(this.host + 'modules', httpOptions);
  }

  getModule(id){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Module>(this.host + 'modules/' + id, httpOptions);
  }


  deleteModule(id){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.delete<Module>(this.host + 'modules/' + id, httpOptions);
  }

  editModule(id: string, module){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.patch(this.host + 'modules/' + id, module, httpOptions);
  }

  changeEtat(id: string, action){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    const module = {
      etat: action
    };

    return this.httpClient.patch(this.host + 'modules/' + id, module, httpOptions);
  }

  doAction(idModule, idEntreprise , type){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    const data = {
      moduleId: idModule,
      entrepriseId : idEntreprise,
      action : type,
    };

    return this.httpClient.post(this.host + 'modules/action' , data, httpOptions);
  }
}
