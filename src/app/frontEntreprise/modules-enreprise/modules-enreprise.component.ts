import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {ModuleService} from '../../services/module-service.service';
import {Router} from '@angular/router';
import {Module} from '../../Models/Module.model';
import {User} from '../../Models/User.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-modules-enreprise',
  templateUrl: './modules-enreprise.component.html',
  styleUrls: ['./modules-enreprise.component.scss']
})
export class ModulesEnrepriseComponent implements OnInit {
  displayedColumns: string[] = [ 'image', 'nom', 'description', 'action' ];
  module : Module;
  dataSource: MatTableDataSource<Module>;
  modules: Module[];
  currentUser: User;
  modulesEnabled: Module[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private ngxService: NgxUiLoaderService, public  snackbar: MatSnackBar, private moduleService: ModuleService,
              private router : Router, private userService: UserService) { }

  ngOnInit() {
    this.ngxService.start();
    this.getCurrentUser();
    this.ngxService.stop();
  }

  getModules(){
    this.ngxService.start(); // start foreground loading with 'default' id
    this.moduleService.getModules().subscribe(value => {
      this.modules = value['_embedded']['modules'];
      this.modulesEnabled = this.modules.filter(module => module.etat == 'enabled');
      this.dataSource = new MatTableDataSource(this.modulesEnabled);
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

  doAction(id, action){
    this.ngxService.start()
    this.moduleService.doAction(id, this.currentUser.entreprise.id, action).subscribe(value => {
      this.getCurrentUser();
      this.snackbar.open('module ' + action + 'ed', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    },error1 => {
      this.snackbar.open('erreur d installation ', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
    this.ngxService.stop();
  }

  isInstalled(idModule){
    let res = false ;
    this.currentUser.entreprise.modules.forEach(value => {
      if (value.id === idModule) {res = true;}
    });
    return res;
  }


  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(value => {
      this.currentUser = value;
      this.getModules();
    },error1 => {
      this.snackbar.open('error to fetch current User', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });
  }
}
