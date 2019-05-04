import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Demande} from '../../Models/Demande.model';

@Component({
  selector: 'app-show-demande',
  templateUrl: './show-demande.component.html',
  styleUrls: ['./show-demande.component.scss']
})
export class ShowDemandeComponent implements OnInit {
demande: Demande;
test: string;
  constructor( public dialogRef: MatDialogRef<ShowDemandeComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {

    this.test = "bbbbbbbbalablbalba";
  }

  ngOnInit() {
    console.log('************ show demande' + this.data);
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
