import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../Models/User.model';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Offre} from '../../Models/Offre.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', './user.datatable.css']})
export class UserComponent implements OnInit {
    displayedColumns: string[] = ['Nom', 'Prenom', 'Email', 'Username', 'Fonction', 'Civilite', 'action' ];
    dataSource: MatTableDataSource<User>;

    users: User[];
    userInvite: User;
    message: string;
    currentUser : User;
    formDisplay = false;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  constructor(private ngxService: NgxUiLoaderService,private userService: UserService , public  snackbar: MatSnackBar) { }

  ngOnInit() {
      this.ngxService.start(); // start foreground loading with 'default' id

      this.userService.getCurrentUser().subscribe(
         value => {
             this.currentUser = value;
             this.getUsers(this.currentUser.entreprise.id);

         },error1 => {
             console.log('erreur fetch current user');
         }
     );
      this.ngxService.stop();



  }

onSubmit(form: NgForm) {
      form.value['typecreation'] = 'email';
   this.userService.createUserByEmail(form.value).subscribe(
       value => {
           this.getUsers(this.currentUser.entreprise.id);
           this.snackbar.open('user a été inviter', 'ok', {
               duration: 3000,
               panelClass: ['blue-snackbar']
           });
           this.formDisplay = false;

       } , error1 => {
            console.log(error1);
           this.snackbar.open(error1.error.message, 'ok', {
               duration: 3000,
               panelClass: ['blue-snackbar']
           });
       }
   );
}

    getUsers(entrepriseId) {
       this.userService.getUsersByEntreprise(entrepriseId).subscribe(
            value => {
                console.log(value['_embedded']);
                this.dataSource = new MatTableDataSource(value['_embedded']['membres']);
                this.users = value['_embedded']['membres'];

                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;


            }, error1 => {
               this.snackbar.open('error fetch users ', 'ok', {
                   duration: 3000,
                   panelClass: ['blue-snackbar']

               });
            }
        );

    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    showForm(){
      this.formDisplay = true;
    }

    deleteUser(id){
    this.userService.deleteUser(id).subscribe(value => {
        this.getUsers(this.currentUser.entreprise.id);
        this.snackbar.open('user deleted ', 'ok', {
            duration: 3000,
            panelClass: ['blue-snackbar']

        });
    }, error1 => {
        this.snackbar.open(error1.error.message, 'ok', {
            duration: 3000,
            panelClass: ['blue-snackbar']

        });
    });
    }
}
