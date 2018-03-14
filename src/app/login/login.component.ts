import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { Token } from './token';
import { GuardService } from '../guard-service.service';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  constructor(private restApi:RestApiService,private cookieService: CookieService){}
  user:User=
  {
    username:'',
    password:''
  }
  do_login()
  {
    this.restApi.login(this.user).then(token =>
    {
      this.cookieService.set('Token',token.token);
      window.location.href="money_manager";

    })
  }
}

export class User
{
  username:string;
  password:string;

}