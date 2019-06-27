import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {PlanService} from '../../services/plan.service';
import {Router} from '@angular/router';
import {PaiementService} from '../../services/paiement.service';
import {UserService} from '../../services/user.service';
import {AbonnementService} from '../../services/abonnement.service';
import {User} from '../../Models/User.model';
import {FactureService} from '../../services/facture.service';
import {Facture} from '../../Models/Facture.model';
import {Module} from '../../Models/Module.model';

@Component({
  selector: 'app-facture-entreprise',
  templateUrl: './facture-entreprise.component.html',
  styleUrls: ['./facture-entreprise.component.scss']
})
export class FactureEntrepriseComponent implements OnInit {

  currentUser: User;
  factures: Facture[];
  displayedColumns: string[] = ['ref', 'creer', 'paymentmethode', 'plan', 'total', 'action' ];
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
    this.factureService.getFactures(this.currentUser.entreprise.id).subscribe(value => {
      this.factures = value['_embedded']['factures'];
      this.dataSource = new MatTableDataSource(this.factures);
      console.log(this.factures);
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
    window.localStorage.getItem('idFactureEntreprise');
    window.localStorage.setItem('idFactureEntreprise', id);
    this.router.navigate(['/factures/show'])
  }
}
