import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss' ],

})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthentificationService , private router: Router ,  public  snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onLogin(data){
      console.log(data);
    this.authService.login(data).subscribe(
        resp => {
            console.log(resp.headers.get('authorization'));
       let jwt = resp.headers.get('authorization');
       this.authService.saveToken(jwt);
        if (this.authService.isFournisseur()) this.router.navigate(['/public/accueil']);
        else this.router.navigate(['/dashboard']);
        },error1 => {
            this.snackbar.open(error1.error.message,'ok', {
                duration: 3000,
                panelClass: ['blue-snackbar']

            });
        });

        }
}
