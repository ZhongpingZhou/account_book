import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from './rest-api.service';
import { Subscription } from 'rxjs/Subscription';
import { GuardService } from './guard-service.service';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit,OnDestroy
{
  ngOnDestroy()
  {
    this.login_state.unsubscribe();

  }
  login_state:Subscription;
  ngOnInit()
  {
    // this.login_state = this.restApi.loginState$.subscribe
    // (state =>
    //   {
    //     if(state)
    //     {
    //       this.router.navigate(['edit',]);
    //     }
    //     else
    //     {
    //       this.router.navigate(['login',]);
    //     }

    //   });
  
  }
  constructor
  (
    private router:Router,
    private restApi:RestApiService,
    private guardService:GuardService
  ){}
  

}
