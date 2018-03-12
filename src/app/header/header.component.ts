import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private username:string;
  login_state:boolean;



  constructor(private restApi:RestApiService,private cookieService:CookieService,private router:Router) { }

  ngOnInit() 
  {
    this.login_state = this.restApi.doAuthorityManage();
    this.getAccount();
    this.login_state = this.restApi.doAuthorityManage();
  }

  getAccount()
  {
    this.restApi.getAccountInfo().then(info =>{
      if('fullname' in info)
      {
        console.log('曾经来过');
        this.username = info['fullname'];
        console.log(this.username);
      }
    }) .catch(err => {
      console.log(err);
    });
  }

  onExit()
  {
    this.cookieService.delete("Token");
    this.login_state = false;
    this.router.navigate(['login',]);
  }

}
