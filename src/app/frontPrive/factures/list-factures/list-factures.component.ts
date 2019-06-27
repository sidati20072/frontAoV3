import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../Models/User.model';
import {Facture} from '../../../Models/Facture.model';
import {Module} from '../../../Models/Module.model';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {PlanService} from '../../../services/plan.service';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {FactureService} from '../../../services/facture.service';

@Component({
  selector: 'app-list-factures',
  templateUrl: './list-factures.component.html',
  styleUrls: ['./list-factures.component.scss']
})
export class ListFacturesComponent implements OnInit {

  currentUser: User;
  factures: Facture[];
  displayedColumns: string[] = ['ref', 'entreprise', 'paymentmethode', 'plan', 'total', 'action' ];
  module : Module;
  dataSource: MatTableDataSource<Facture>;
  modules: Module[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private ngxService: NgxUiLoaderService, public snackbar: MatSnackBar, private planService: PlanService,
              private router: Router,  private userService: UserService, private factureService: FactureService
  ) { }
  ngOnInit() {
    this.ngxService.start();
    this.userService.getCurrentUser().subscribe(value => {
      this.currentUser = value;
      this.getFactures();
    }, error1 => {
      this.snackbar.open('error to fetch factures', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
    this.ngxService.stop();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getFactures(){
    this.factureService.getAllFactures().subscribe(value => {
      this.factures = value['_embedded']['factures'];
      this.dataSource = new MatTableDataSource(this.factures);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },error1 => {
      this.snackbar.open('error to fetch factures', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
  }

  onShow(id) {
    window.localStorage.removeItem('idFacture');
    window.localStorage.setItem('idFacture', id);
    this.router.navigate(['/super/factures/show']);
  }
}
