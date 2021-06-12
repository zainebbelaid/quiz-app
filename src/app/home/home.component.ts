import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Route, RouteConfigLoadStart,Router} from "@angular/router";

import {UserService} from '../service/user.service';

import {User} from '../model/User';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  user = new User;
 
  msg='';
 
 
  constructor(private _servicee : UserService ,private _router : Router ) { }

  ngOnInit(){
  }

  loginUser(){
    this._servicee.loginuserFormRemote(this.user).subscribe(
          data => {console.log("réponse reçue");this._router.navigate(['/theme']) },
          error => {console.log("une exception s'est produite")       
                     this.msg='bad credentials, please enter valid email and password';}
  
          )
  }

  

 

 /* gotoregistration(){
    this._router.navigate(['/inscription'])
  } */  
}
