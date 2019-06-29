import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../../Models/User.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {CategorieService} from '../../../services/categorie.service';
import {Categorie} from '../../../Models/Categorie.model';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.scss']
})
export class CategorieListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name',  'action' ];
  dataSource: MatTableDataSource<Categorie>;

  categories: Categorie[];
  userInvite: User;
  message: string;
  currentUser : User;
  formDisplay = false;
  formEditDisplay = false;
  selectedName;
  selectedId;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private ngxService: NgxUiLoaderService,private categorieService: CategorieService , public  snackbar: MatSnackBar, private router: Router) { }


  ngOnInit() {
    this.ngxService.start();

    this.getCategories();
    this.ngxService.stop();

  }

  getCategories(){
    this.categorieService.getCategories().subscribe(value => {
      this.categories = value['_embedded']['categories'];
      this.dataSource = new MatTableDataSource(this.categories);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    }, error1 => {
      this.snackbar.open('error to feetch categories', 'ok', {
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

  showFormCreate(){
    this.formDisplay = true;
  }
  showFormEdit(id , name){
    this.formEditDisplay = true;
    this.selectedName = name;
    this.selectedId = id;
  }

onCancel(action){
    if (action === 'create') { this.formDisplay = false; }
    else { this.formEditDisplay = false; }
}
  onCreate(form){

    this.categorieService.createCategorie(form.value).subscribe(value => {
      this.snackbar.open('categorie created', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.getCategories();
      this.onCancel('create');
      },error1 => {
      this.snackbar.open('error de creation', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
  }

  onEdit(f){
    this.categorieService.editCategorie(this.selectedId, f.value).subscribe(value => {
      this.snackbar.open('edited', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.getCategories();
      this.onCancel('edit');

    },error1 => {
      console.log(error1);
      this.snackbar.open('error de la modification', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
  }
  onDelete(id){
    this.categorieService.delete(id).subscribe(value =>{
      this.snackbar.open('Deleted', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.getCategories();
    },error1 => {
      this.snackbar.open('erreur lors de suppression', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
    });
    });
  }

}
