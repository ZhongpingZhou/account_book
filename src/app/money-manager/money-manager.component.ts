import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DialogService } from '../dialog/dialog.component';

@Component({
  selector: 'app-money-manager',
  templateUrl: './money-manager.component.html',
  styleUrls: ['./money-manager.component.css']
})
export class MoneyManagerComponent
{
  constructor(private restApi:RestApiService,
  private dialogService:DialogService)
  {
  }
  account:Account =
  {
    spend:null,
    description:''
  }
  do_submit()
  {
    console.log(this.do_cheackd());
    if(this.do_cheackd())
    {
      this.restApi.saveAccount(this.account);
      window.location.href ='https://segmentfault.com/';
    }
    else
    {
      this.dialogService.openDialog();
    }
  }

  do_cheackd():boolean
  {
    if(this.account.spend == null || this.account.description == '')
    {
      return false;
    }
    else
    {
      return true;
    }
  
  }
}
export class Account
{
  spend:number;
  description:string;

}

