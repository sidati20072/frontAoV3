import {Component, OnInit, ViewChild} from '@angular/core';
import {Module} from '../../../Models/Module.model';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ModuleService} from '../../../services/module-service.service';
import {Router} from '@angular/router';
import {Plan} from '../../../Models/Plan.model';
import {PlanService} from '../../../services/plan.service';

@Component({
  selector: 'app-list-plans',
  templateUrl: './list-plans.component.html',
  styleUrls: ['./list-plans.component.scss']
})
export class ListPlansComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'prix', 'description', 'action' ];
  plan : Plan;
  dataSource: MatTableDataSource<Plan>;
  plans: Plan[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private ngxService: NgxUiLoaderService, public  snackbar: MatSnackBar, private planService: PlanService,
              private router : Router) { }

  ngOnInit() {
    this.getPlans();
  }

  getPlans(){
    this.ngxService.start(); // start foreground loading with 'default' id
    this.planService.getPlans().subscribe(value => {
      this.plans = value['_embedded']['plans'];
      this.dataSource = new MatTableDataSource(this.plans);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },error1 => {
      this.snackbar.open('error to fetch modules', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
    this.ngxService.stop();
  }
  onEdit(id){
    localStorage.removeItem('idPlan');
    localStorage.setItem('idPlan', id);
    this.router.navigate(['/super/plans/edit']);

  }

  onDelete(id){
    this.planService.deletePlan(id).subscribe(value => {
      this.snackbar.open('deleted', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
      this.getPlans();
    },error1 => {
      this.snackbar.open('error de suppression', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    })
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addModule(){
    this.router.navigate(['/super/plans/create']);
  }


}
