import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RestApiService } from '../rest-api.service';
import { Token } from './token';
import { GuardService } from '../guard-service.service';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private restApi:RestApiService){}
  ngOnInit(){
    const current_url = window.location.href;
    if (current_url.endsWith('/login')) {
        const length = current_url.length
        this.restApi.doOAuthLogin(current_url.substr(0, length - 6));
    }
   
  }
}
