import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-money-manager',
  templateUrl: './money-manager.component.html',
  styleUrls: ['./money-manager.component.css']
})
export class MoneyManagerComponent
{
  constructor(private restApi:RestApiService)
  {
  }
  account:Account =
  {
    spend:null,
    descripion:''
  }
  do_submit()
  {
    this.restApi.saveAccount(this.account)
  }
}
export class Account
{
  spend:number;
  descripion:string;

}
