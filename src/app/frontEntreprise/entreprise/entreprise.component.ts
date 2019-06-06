import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from '../../services/entreprise.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UploadFileService} from '../../services/upload-file.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatSnackBar} from '@angular/material';
import {Entreprise} from '../../Models/Entreprise.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {
entreprise: Entreprise;
id: number;
  selectedFiles: FileList;
  currentFileUpload: File;
  imageLink : string;
  imageSelected: string;
  constructor(private entrepriseService: EntrepriseService ,
              private router: Router,
              private route: ActivatedRoute,
              private userService : UserService,
              private uploadService: UploadFileService,
              private ngxService: NgxUiLoaderService,
              public  snackbar: MatSnackBar,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getEntreprise();

    });
  }

  getEntreprise(){
    this.entrepriseService.getEntreprise(this.id).subscribe(value => {
      this.entreprise = value;
    },error1 => {
      this.snackbar.open('error fetch entreprise', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
  }


  onSubmit(f: NgForm) {

    this.entrepriseService.updateEntreprise(this.id, f.value).subscribe(
        value => {
          this.snackbar.open('updated', '', {
            duration: 3000,
            panelClass: ['blue-snackbar']
          });
          this.getEntreprise();
        }, error1 => {
          this.snackbar.open('error update entreprise', '', {
            duration: 3000,
            panelClass: ['blue-snackbar']
          });
        });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.imageSelected = event.target.files.item(0).name;
    this.upload();

  }

  upload() {
    this.ngxService.start(); // start foreground loading with 'default' id
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload , this.id, 'entreprise').subscribe(event => {
      this.getEntreprise();
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
    this.selectedFiles = undefined;
  }
}
