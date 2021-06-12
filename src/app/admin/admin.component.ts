import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Route, RouteConfigLoadStart,Router} from "@angular/router";
import {AdminService} from '../service/admin.service';

import {Admin} from '../model/Admin';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  namePattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  adminPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  admin = new Admin;
 
  mesg='';
  constructor( private _service : AdminService,private _router : Router ) { }

  ngOnInit(): void {
  }
  
  loginAdmin(){
    this._service.loginadminFormRemote(this.admin).subscribe(
          data => console.log("réponse reçue") ,
          error => {console.log("une exception s'est produite") 
                    this.mesg='bad credentials, please enter valid name-admin and password';}

    )
  }
}
