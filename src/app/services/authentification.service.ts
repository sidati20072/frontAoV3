import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  jwt:string;
  username:string;
  name:string;
  roles:Array<any>;
  host: string = 'http://localhost:8181';
  constructor(private http: HttpClient) { }

  login(data){
    return this.http.post(this.host+"/login",data,{observe:'response'})
  }

  saveToken(jwt: string){
  localStorage.setItem('token', jwt);
  this.jwt = jwt;
  this.parseJWT();
  }

  parseJWT(){
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.sub;
    this.roles = objJWT.roles;

  }

  isAdmin(){
    let pos = this.roles.map(function(e) { return e.authority; }).indexOf('ADMIN');
    return pos >= 0;  }

  isUser(){
    let pos = this.roles.map(function(e) { return e.authority; }).indexOf('USER');
    return pos >= 0;
  }

  isAuthenticated(){

    return  this.roles && (this.isAdmin() || this.isUser());
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }

  logout(){
    localStorage.removeItem('token');
    this.initParams();
  }


  initParams(){
    this.username = undefined;
    this.jwt = undefined;
    this.roles = undefined;

  }

}
