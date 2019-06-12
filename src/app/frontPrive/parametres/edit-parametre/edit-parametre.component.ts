import { Component, OnInit } from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {ParameterService} from '../../../services/parameter.service';
import {Parametre} from '../../../Models/Parametre.model';
import {NgForm} from '@angular/forms';
import {Module} from '../../../Models/Module.model';
import {UploadFileService} from '../../../services/upload-file.service';

@Component({
  selector: 'app-edit-parametre',
  templateUrl: './edit-parametre.component.html',
  styleUrls: ['./edit-parametre.component.scss']
})
export class EditParametreComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  imageLink: string;
  imageSelected: string;
  parametre : Parametre;
  htmlContent: string = 'test';
  constructor( private uploadService: UploadFileService, private parametreService: ParameterService, private ngxService: NgxUiLoaderService, public  snackbar: MatSnackBar, private router : Router) { }

  ngOnInit() {
    this.ngxService.start();
    this.parametreService.getParametre().subscribe(value => {
      this.parametre = value;
    }, error1 => {
      this.snackbar.open('error to fetch parametre ', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }

  onSubmit(f: NgForm) {
    f.value['logo'] = this.parametre.logo;
    this.parametreService.editParametre( f.value).subscribe(value => {
      this.snackbar.open('Updated', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    },error1 => {
      this.snackbar.open('error to update parametre', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });

    console.log(f.value);
    console.log(f.value['description']);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.imageSelected = event.target.files.item(0).name;
    this.upload();

  }

  upload() {
    this.ngxService.start(); // start foreground loading with 'default' id
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload , 0 , 'module').subscribe(media => {
      this.parametre.logo = media.link;
      this.ngxService.stop();
    },error1 => {
      console.log(error1);
      this.snackbar.open('', 'error ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.ngxService.stop();

    });
    this.ngxService.stop();

    this.selectedFiles = undefined;
  }

  back(){
    this.router.navigate(['/super']);
  }

}
