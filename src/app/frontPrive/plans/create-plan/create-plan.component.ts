import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {UploadFileService} from '../../../services/upload-file.service';
import {ModuleService} from '../../../services/module-service.service';
import {PlanService} from '../../../services/plan.service';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss']
})
export class CreatePlanComponent implements OnInit {

  constructor(public  snackbar: MatSnackBar , private router : Router , private ngxService: NgxUiLoaderService,
              private planService: PlanService ) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    this.ngxService.start(); // start foreground loading with 'default' id

    this.planService.createPlans(f.value).subscribe(value => {
      this.router.navigate(['/super/plans']);
    },error1 => {
      this.snackbar.open('erreur de creation Plan', 'error ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
    this.ngxService.stop();
  }

  back(){
    this.router.navigate(['/super/plans']);
  }
}
