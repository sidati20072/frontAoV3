import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../Models/User.model";
import {NgForm} from "@angular/forms";
import {UploadFileService} from '../../services/upload-file.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
private id;
 user: User;
 selectedFiles: FileList;
 currentFileUpload: File;
 imageLink : string;
 imageSelected: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService : UserService,
              private uploadService: UploadFileService,
              private ngxService: NgxUiLoaderService,
              public  snackbar: MatSnackBar,
              ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getUser();

    });
  }
  getUser(){

    this.userService.getUser(this.id).subscribe(
        value => {
          this.user=value;
          console.log(this.user);
        }, error1 => {
          console.log("error fetch user ");

        });
  }

  onSubmit(f: NgForm) {

      this.userService.updateUser(this.id, f.value).subscribe(
        value => {
            this.snackbar.open('updated', '', {
                duration: 3000,
                panelClass: ['blue-snackbar']
            });
            this.getUser();
        }, error1 => {
              this.snackbar.open('error update', '', {
                  duration: 3000,
                  panelClass: ['blue-snackbar']
              });
        });

      this.getUser();
  }

    selectFile(event) {
        this.selectedFiles = event.target.files;
        this.imageSelected = event.target.files.item(0).name;
        this.upload();

    }

    upload() {
        this.ngxService.start(); // start foreground loading with 'default' id
        this.currentFileUpload = this.selectedFiles.item(0);
        this.uploadService.pushFileToStorage(this.currentFileUpload , this.user.id , 'user').subscribe(event => {
            this.user.image = event.link;
            this.getUser();
            this.snackbar.open('updated', '', {
                duration: 3000,
                panelClass: ['blue-snackbar']
            });

        },error1 => {
            console.log(error1);
            this.snackbar.open('', 'error ok', {
                duration: 3000,
                panelClass: ['blue-snackbar']
            });
            this.ngxService.stop();

        });
        this.getUser();

        this.selectedFiles = undefined;
        this.ngxService.stop();

    }
}
