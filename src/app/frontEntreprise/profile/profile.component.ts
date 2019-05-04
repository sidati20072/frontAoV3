import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../Models/User.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
private id;
 user: User;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService : UserService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getUser();
  }


  getUser(){

    this.userService.getUser(this.id).subscribe(
        value => {
          this.user=value;
          console.log(this.user);
        }, error1 => {
          console.log("error fetch user ");

        }
    )
  }

  onSubmit(f: NgForm) {

      this.userService.updateUser(this.id, f.value).subscribe(
        value => {
            console.log('updated');
        }, error1 => {
            console.log('error update');
        }
    );

   this.getUser();
  }
}
