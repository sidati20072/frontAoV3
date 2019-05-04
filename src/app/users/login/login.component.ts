import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss' ],

})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthentificationService , private router: Router) { }

  ngOnInit() {
  }

  onLogin(data){
      console.log(data);
    this.authService.login(data).subscribe(
        resp => {
            console.log(resp.headers.get('authorization'));
       let jwt = resp.headers.get('authorization');
       this.authService.saveToken(jwt);
       this.router.navigate(['/dashboard']);
        },error1 => {
          console.log ('erreur de cnx');

        }
    )
  }

}
