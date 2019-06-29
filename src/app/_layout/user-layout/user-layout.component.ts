import { Component, OnInit } from '@angular/core';
import {ParameterService} from '../../services/parameter.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

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
