import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Demande} from '../../../Models/Demande.model';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {OffreService} from '../../../services/offre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DemandeService} from '../../../services/demande.service';
import {ModuleService} from '../../../services/module-service.service';
import {Module} from '../../../Models/Module.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list-modules.component.html',
  styleUrls: ['./list-modules.component.scss']
})
export class ListModulesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'nom', 'description', 'etat', 'action' ];
  module : Module;
  dataSource: MatTableDataSource<Module>;
  modules: Module[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private ngxService: NgxUiLoaderService, public  snackbar: MatSnackBar, private moduleService: ModuleService,
              private router : Router) { }

  ngOnInit() {
   this.getModules();
  }

  getModules(){
    this.ngxService.start(); // start foreground loading with 'default' id
    this.moduleService.getModules().subscribe(value => {
      this.modules = value['_embedded']['modules'];
      this.dataSource = new MatTableDataSource(this.modules);
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
    localStorage.removeItem('idModule');
    localStorage.setItem('idModule', id);
    this.router.navigate(['/super/modules/edit']);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addModule(){
    this.router.navigate(['/super/modules/create']);
  }
  onAction(action , id){
    this.moduleService.changeEtat(id, action).subscribe(value => {
      this.getModules();
      this.snackbar.open('Module ' + action, '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    },error1 => {
      this.snackbar.open('error to ' + action + ' module', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }
}
