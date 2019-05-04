import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {User} from '../../Models/User.model';
import {Entreprise} from '../../Models/Entreprise.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {ErrorStateMatcher} from '@angular/material';

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

  message : string;
  user: User;
  isLinear = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
hide = true;
  constructor(private userService: UserService ,     private router: Router) { }

  ngOnInit() {
  }

  matcher = new MyErrorStateMatcher();


  onSubmit(form: NgForm) {
    this.user = new User();
    console.log(form.value);
   /* this.message = this.userService.createEntreprise(form.value);
    if (this.message=="created"){
      this.router.navigate(['/login']);
    } else {
        return ;}*/
  }
}
