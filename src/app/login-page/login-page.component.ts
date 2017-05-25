import { Component, OnInit } from '@angular/core';
import {AF} from "../providers/db";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public afService: AF, private router: Router) {}
  login() {
    this.afService.login().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['']);
    })
  }
  loginwithemail(event, email, password){
    this.afService.loginwithemail(email,password).then((user) => {
      this.router.navigate(['']);
    }).catch((error)=> {
      console.log(error.message)
    })
  }

  ngOnInit() {
  }

}
