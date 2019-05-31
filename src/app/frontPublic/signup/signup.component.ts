import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;

  constructor(private userService: UserService,private router: Router , public  snackbar: MatSnackBar) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm){
    this.userService.createFournisseur(form.value).subscribe(value => {
      this.router.navigate(['/login']);

    }, error1 => {
      this.snackbar.open(error1.error.message,'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }
}
