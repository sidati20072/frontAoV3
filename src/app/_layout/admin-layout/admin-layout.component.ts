import { Component, OnInit } from '@angular/core';
import {ParameterService} from '../../services/parameter.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  parameter;
  online = true;
  constructor( private parametreService : ParameterService) { }

  ngOnInit() {
    this.parametreService.getParametre().subscribe(value => {
      this.parameter = value;
      if (this.parameter.mode === 'disabled') {this.online = false;}
    },error1 => {
      console.log(error1);
    });
  }

}
