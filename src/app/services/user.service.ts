import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import {User} from '../Models/User.model';
import {AuthentificationService} from './authentification.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  host: string = 'http://localhost:8181/';
  host2: string = 'http://localhost:8180/';
  message: string;
  users: User[];
  user: User;
  currentUser: User;

    constructor(private httpClient: HttpClient , private authService : AuthentificationService) {   }


   createUserByEmail(form)  {
   return  this.httpClient.post(this.host2 + 'invite', form);

  }


     createEntreprise(user){

         const httpOptions = {
             headers: new HttpHeaders({
                 'Content-Type': 'application/json',
             })
         };
      return this.httpClient.post(this.host2 + 'create_entreprise', user , httpOptions);
    }

    getUsers(): Observable<User[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization':  this.authService.jwt
            })
        };
         return this.httpClient.get<User[]>(this.host2 + 'membres', httpOptions);

    }

    getUser(id: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization':  this.authService.jwt
            })
        };
        return this.httpClient.get<User>(this.host2 + 'membres/'+id, httpOptions);
    }

    updateUser(user: number, value: any) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization':  this.authService.jwt
            })
        };
        return this.httpClient.patch(this.host2 + 'membres/'+user,value, httpOptions);    }

    getCurrentUser() {
        const httpOptions = {
            headers: new HttpHeaders({
            //    'Authorization':  this.authService.jwt
            })
        };
        let uri = this.host2+'membres/search/findByUsername?username=';
            console.log("serahced by"+this.authService.username);

        return this.httpClient.get<User>(uri+this.authService.username, httpOptions);
    }



}
