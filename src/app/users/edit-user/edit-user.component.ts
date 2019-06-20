import { Component, OnInit } from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {UserService} from '../../services/user.service';
import {MatSnackBar} from '@angular/material';
import {User} from '../../Models/User.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
id: string;
user: User;
  constructor(private ngxService: NgxUiLoaderService,private userService: UserService , public  snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.ngxService.start()
    this.id =  localStorage.getItem('idUser');
    localStorage.removeItem('idUser');
    if (this.id === null) this.router.navigate(['/users']);
    this.userService.getUser(this.id).subscribe(value => {
    this.user = value;
  },error1 => {
      this.snackbar.open('error to fetch User', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
  });

    this.ngxService.stop();
  }

  onSubmit(f) {
    this.ngxService.start();
    this.userService.updateUser(this.id, f.value).subscribe(value => {
      this.snackbar.open('updated', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    },error1 => {
      this.snackbar.open('error de mise a jour', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
    this.ngxService.stop();

  }
  back(){
    this.router.navigate(['/users']);
  }
}
