import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {User} from '../../Models/User.model';
import {Entreprise} from '../../Models/Entreprise.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {ErrorStateMatcher, MatSnackBar} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-entreprise',
  templateUrl: './create-entreprise.component.html',
  styleUrls: ['./create-entreprise.component.scss']
})
export class CreateEntrepriseComponent implements OnInit {

  message: string;
  user: User;
  isLinear = false;

  hide = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder , public  snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  onSubmit(form: NgForm) {
    if (form.value['password'] !== form.value['Confirmation']) {
      this.snackbar.open('Les mots de passe ne correspondent pas. Veuillez réessayer ','', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
      return ;
    }
    this.userService.createEntreprise(form.value).subscribe(value => {
      this.router.navigate(['/login']);

    }, error1 => {
      this.snackbar.open(error1.error.message,'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }
}
