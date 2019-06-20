import { Component, OnInit } from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {UserService} from '../../../services/user.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {EntrepriseService} from '../../../services/entreprise.service';
import {Entreprise} from '../../../Models/Entreprise.model';

@Component({
  selector: 'app-show-entreprise',
  templateUrl: './show-entreprise.component.html',
  styleUrls: ['./show-entreprise.component.scss']
})
export class ShowEntrepriseComponent implements OnInit {
  id: any;
  entreprise: Entreprise;
  constructor(private ngxService: NgxUiLoaderService, private entrepriseService: EntrepriseService , public  snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.ngxService.start();
    this.id =  localStorage.getItem('idEntreprise');
    //localStorage.removeItem('idEntreprise');
    if (this.id === null) this.router.navigate(['/super/entreprises']);
    this.entrepriseService.getEntreprise(this.id).subscribe(value => {
      this.entreprise = value;
      console.log(this.entreprise);
    },error1 => {
      this.snackbar.open('error to fetch', '', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    });
    this.ngxService.stop();
  }

}
