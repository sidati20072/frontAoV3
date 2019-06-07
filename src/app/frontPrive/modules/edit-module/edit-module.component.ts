import {Component, OnInit} from '@angular/core';
import {ModuleService} from '../../../services/module-service.service';
import {Module} from '../../../Models/Module.model';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {MatSnackBar} from '@angular/material';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UploadFileService} from '../../../services/upload-file.service';

@Component({
    selector: 'app-edit-module',
    templateUrl: './edit-module.component.html',
    styleUrls: ['./edit-module.component.scss']
})
export class EditModuleComponent implements OnInit {
    id: string;
    module: Module;
    selectedFiles: FileList;
    currentFileUpload: File;
    imageLink: string;
    imageSelected: string;
    constructor(private moduleService: ModuleService, private ngxService: NgxUiLoaderService, public  snackbar: MatSnackBar ,
                private uploadService: UploadFileService, private router : Router) {
    }

    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        this.id = localStorage.getItem('idModule');
        localStorage.removeItem('idModule');
        if (this.id == undefined) { this.router.navigate(['/super/modules']);}
        else {
        this.moduleService.getModule(this.id).subscribe(value => {
            this.module = value;
        }, erro1 => {
            this.snackbar.open('error to fetch module ', '', {
                duration: 3000,
                panelClass: ['blue-snackbar']

            });
        });
        this.ngxService.stop();
        }
    }

    onSubmit(f: NgForm) {
        f.value['image'] = this.module.image;
        this.moduleService.editModule(this.id , f.value).subscribe(value => {
            this.snackbar.open('Updated', '', {
                duration: 3000,
                panelClass: ['blue-snackbar']
            });
            },error1 => {
            this.snackbar.open('error to create Module', '', {
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
        this.uploadService.pushFileToStorage(this.currentFileUpload , 0 , 'module').subscribe(media => {
            this.module.image = media.link;
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
        this.router.navigate(['/super/modules']);
    }
}
