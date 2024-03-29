import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Offre} from '../../../Models/Offre.model';
import {OffreService} from '../../../services/offre.service';
import {ShowDemandeComponent} from '../../show-demande/show-demande.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Demande} from '../../../Models/Demande.model';
import {CreateOffreComponent} from '../create-offre/create-offre.component';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {DemandeService} from '../../../services/demande.service';
import {ViewService} from '../../../services/view.service';
import {View} from '../../../Models/View.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';


@Component({
  selector: 'app-show-offre',
  templateUrl: './show-offre.component.html',
  styleUrls: ['./show-offre.component.scss']
})
export class ShowOffreComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['id', 'fournisseur', 'dateExecution', 'duree',  'tarif', 'etat', 'devis', 'action' ];

  dataSource: MatTableDataSource<Demande>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public ngxSmartModalService: NgxSmartModalService, private offreService: OffreService, public  snackbar: MatSnackBar, public dialog: MatDialog , private router: Router,
              private route: ActivatedRoute, private demandeService: DemandeService, private viewService : ViewService,
              private ngxService: NgxUiLoaderService) {
  }
  animal: string;
  name: string;
  id: string;
  offre: Offre;
  view : View;
  demande : Demande;
  demandes: Demande[];
  showPrice = false;
  openDialog(demande): void {
    console.log('clicked');
    console.log(demande);
    const dialogRef = this.dialog.open(ShowDemandeComponent,
        {
          data: {name: 'test', test: 'name2' }
        });
  }
  ngOnInit() {
      this.id = localStorage.getItem('idOffre');
      localStorage.removeItem('idOffre');
      if (this.id == null) {
          this.snackbar.open('offres invalid', '', {
              duration: 3000,
              panelClass: ['blue-snackbar']
          });
          return;
      } else {
          this.getDemandes();

          this.getOffre();

      }
  }
showModal(){
    this.ngxSmartModalService.getModal('myModal').open();
}

showDemande(id){
      this.ngxService.start();
      this.demandeService.getDemande(id).subscribe(value => {
      this.demande = value;
      this.ngxSmartModalService.getModal('myDemande').open();

    },error1 => {
        this.snackbar.open('erreur to fetch demande', '', {
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

  getDemandes(){
      this.ngxService.start();
      this.demandeService.getDemandesByOffre(this.id).subscribe(value => {
          this.demandes = value['_embedded']['demandes'];
          this.dataSource = new MatTableDataSource(this.demandes);
          console.log(this.demandes);
      }, error => {
          console.log('error fetch demandes ');
      });
      this.ngxService.stop();
  }
   getOffre(){
      this.ngxService.start();
          this.offreService.getOffre(this.id).subscribe(value => {
              this.offre = value;
              const currentDate = new Date();
              const limitDate = new Date(this.offre.dateLimite);
              if (currentDate.getTime() > limitDate.getTime()){
                  this.showPrice = true; }
              this.getView();
              this.ngxSmartModalService.setModalData(this.offre, 'offre');

          }, error1 => {
              console.log('erreur feetch offres');
              this.snackbar.open('erreur feetch offres', '', {
                  duration: 3000,
                  panelClass: ['blue-snackbar']

              });
          });

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.ngxService.stop();
      }
  onAction(action, id) {
      this.ngxService.start();
      this.demandeService.demandeAction(action, id).subscribe(value => {
          this.getDemandes();
          this.snackbar.open(value.response, '', {
              duration: 3000,
              panelClass: ['blue-snackbar']
          });
      },error1 => {
          console.log(error1);
          this.snackbar.open('error to change status', '', {
              duration: 3000,
              panelClass: ['blue-snackbar']
          });
      })
      this.ngxService.stop();
  }

  getView(){
      this.viewService.getView(this.id).subscribe(value => {
          this.view = value;
      },error1 => {
          console.log(error1);
          this.snackbar.open('error to feetch View', '', {
              duration: 3000,
              panelClass: ['blue-snackbar']
          });
      });
  }
}
