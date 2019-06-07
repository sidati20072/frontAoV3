import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {OffreService} from '../../../services/offre.service';
import {CategorieService} from '../../../services/categorie.service';
import {EntrepriseService} from '../../../services/entreprise.service';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {UploadFileService} from '../../../services/upload-file.service';
import {ModuleService} from '../../../services/module-service.service';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  imageLink: string;
  imageSelected: string;
  constructor(public  snackbar: MatSnackBar , private router : Router , private ngxService: NgxUiLoaderService,
              private uploadService: UploadFileService , private moduleService  : ModuleService ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.upload(f);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.imageSelected = event.target.files.item(0).name;

  }

  upload(f) {
    this.ngxService.start(); // start foreground loading with 'default' id
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload , 0 , 'module').subscribe(media => {
      f.value['image'] = media.link;
      this.save(f);
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

  save(form){
  this.moduleService.createModule(form.value).subscribe(value => {
    this.router.navigate(['/super/modules']);
  },error1 => {
    this.snackbar.open('error to create Module', '', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  });
  }

}
