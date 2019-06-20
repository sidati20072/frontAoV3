import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../../Models/User.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {EntrepriseService} from '../../../services/entreprise.service';
import {Entreprise} from '../../../Models/Entreprise.model';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.scss']
})
export class ListEntrepriseComponent implements OnInit {
  displayedColumns: string[] = ['logo', 'nom', 'email', 'tel', 'secteur', 'etat', 'action' ];
  dataSource: MatTableDataSource<Entreprise>;

  entreprises: Entreprise[];
  currentUser : User;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private ngxService: NgxUiLoaderService, private entrepriseService: EntrepriseService , public  snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.ngxService.start();
    this.entrepriseService.getEntreprises().subscribe(value => {
      this.entreprises = value['_embedded']['entreprises'];
      this.dataSource = new MatTableDataSource(this.entreprises);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },error1 => {
      this.snackbar.open('error to fetch entreprises', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
  }

  onShow(id){
      localStorage.removeItem('idEntreprise');
      localStorage.setItem('idEntreprise', id);
      this.router.navigate(['/super/entreprises/show']);
  }
}
