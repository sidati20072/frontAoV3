import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../../../services/module-service.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatSnackBar} from '@angular/material';
import {UploadFileService} from '../../../services/upload-file.service';
import {Router} from '@angular/router';
import {Plan} from '../../../Models/Plan.model';
import {PlanService} from '../../../services/plan.service';

@Component({
  selector: 'app-edit-plans',
  templateUrl: './edit-plans.component.html',
  styleUrls: ['./edit-plans.component.scss']
})
export class EditPlansComponent implements OnInit {

  plan : Plan;
  id : string;
  constructor(private planService: PlanService, private ngxService: NgxUiLoaderService, public  snackbar: MatSnackBar, private router : Router) {
  }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
    this.id = localStorage.getItem('idPlan');
    localStorage.removeItem('idPlan');
    if (this.id == undefined) {
      this.router.navigate(['/super/plans']);
    } else {
      this.planService.getPlan(this.id).subscribe(value => {
        this.plan = value;
      }, erro1 => {
        this.snackbar.open('error to fetch plan ', '', {
          duration: 3000,
          panelClass: ['blue-snackbar']

        });
      });
      this.ngxService.stop();
    }
  }

  onSubmit(f){
    this.ngxService.start(); // start foreground loading with 'default' id

    this.planService.editPlan(this.id , f.value).subscribe(value => {
      this.snackbar.open('updated ', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    },error1 => {
      this.snackbar.open('error to update plan ', '', {
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
