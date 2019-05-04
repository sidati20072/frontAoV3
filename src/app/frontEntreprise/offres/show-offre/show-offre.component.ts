import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Offre} from '../../../Models/Offre.model';
import {OffreService} from '../../../services/offre.service';
import {ShowDemandeComponent} from '../../show-demande/show-demande.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Demande} from '../../../Models/Demande.model';
import {CreateOffreComponent} from '../create-offre/create-offre.component';


@Component({
  selector: 'app-show-offre',
  templateUrl: './show-offre.component.html',
  styleUrls: ['./show-offre.component.scss']
})
export class ShowOffreComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['dateExecution', 'duree', 'etat', 'tarif', 'action' ];

  dataSource: MatTableDataSource<Demande>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private offreService: OffreService, public  snackbar: MatSnackBar, public dialog: MatDialog , private router: Router,
              private route: ActivatedRoute) {
  }
  animal: string;
  name: string;
  id: number;
  offre: Offre;
  demandes: Demande[];
  openDialog(demande): void {
    console.log('clicked');
    console.log(demande);
    const dialogRef = this.dialog.open(ShowDemandeComponent,
        {
          data: {name: 'test', test: 'name2' }
        });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.offreService.getOffreDemandes(this.id).subscribe(value =>{
      this.demandes = value['_embedded']['demandes'];
      this.dataSource = new MatTableDataSource(this.demandes);
    },error => {
      console.log('error fetch demandes ');
    });
    this.offreService.getOffre(this.id).subscribe(value => {
      console.log('*****************'+ value);
      this.offre = value;

    },error1 => {
      console.log('erreur feetch offres');
      this.snackbar.open('erreur feetch offres', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']

      });
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClickDelete(e, id) {
    e.stopPropagation();
    // do stuff with the id;
  }
}
