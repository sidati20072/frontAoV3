import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../Models/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', './user.datatable.css']})
export class UserComponent implements OnInit {

    users: User[];
    userInvite: User;
    message: string;
    currentUser : User;
  constructor(private userService: UserService) { }

  ngOnInit() {
     this.userService.getCurrentUser().subscribe(
         value => {
             this.currentUser = value;
         },error1 => {
             console.log('erreur fetch current user');
         }
     );
    this.getUsers();

  }

onSubmit(form: NgForm) {
      form.value['typecreation'] = 'email';
   this.userService.createUserByEmail(form.value).subscribe(
       value => { this.message = 'user a été créer' ;
           this.getUsers();

       } , error1 => { this.message = 'error de creation';

       }
   );
}

    getUsers() {
       this.userService.getUsers().subscribe(
            value => {
                console.log(value['_embedded']);

                this.users = value['_embedded']['membres'];
            }, error1 => {
                console.log('error de recuperation des users');
            }
        );

    }
}
