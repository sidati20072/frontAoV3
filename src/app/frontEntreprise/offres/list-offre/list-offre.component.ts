import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Offre} from '../../../Models/Offre.model';
import {OffreService} from '../../../services/offre.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../Models/User.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-list-offre',
    templateUrl: './list-offre.component.html',
    styleUrls: ['./list-offre.component.scss']
})
export class ListOffreComponent implements OnInit {
    displayedColumns: string[] = ['objet', 'datelimite', 'dateexecution', 'type', 'user', 'action'];
    dataSource: MatTableDataSource<Offre> ;
    currentUser: User;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(private router: Router, public  snackbar: MatSnackBar, private offreService: OffreService, private userService: UserService) {
    }
    ngOnInit() {
        this.userService.getCurrentUser().subscribe(value => {
            this.currentUser = value;
            this.loadOffres();
        }, error1 => {
            this.snackbar.open('erreur feetch User', '', {
                duration: 3000,
                panelClass: ['blue-snackbar']
            });
        });
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    loadOffres() {
        this.offreService.getOffres2(1).subscribe(value => {
            this.dataSource = new MatTableDataSource(value['_embedded']['offres']);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log(value);
        }, error1 => {
            this.snackbar.open('erreur feetch offres', '', {
                duration: 3000,
                panelClass: ['blue-snackbar']
            });
        });
    }

    showOffre(id){
        localStorage.removeItem('idOffre');
        localStorage.setItem('idOffre', id);
        this.router.navigate(['/offres/show']);

    }
}



