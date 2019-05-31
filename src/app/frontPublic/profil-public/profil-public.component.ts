import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../Models/User.model';
import {MatSnackBar} from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profil-public',
  templateUrl: './profil-public.component.html',
  styleUrls: ['./profil-public.component.scss']
})
export class ProfilPublicComponent implements OnInit {
user : User;
  constructor(private userService : UserService , public  snackbar: MatSnackBar ) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(value => {
      this.user = value;
      console.log(this.user);
      console.log(value);
    }, error1 => {
      this.snackbar.open(error1.error.message,'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }

  onSubmit(f : NgForm){
    this.userService.updateUser(this.user.id, f.value).subscribe( value => {
      this.snackbar.open('profil updated','ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    }, error1 => {
      this.snackbar.open(error1.error.message,'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }
}
