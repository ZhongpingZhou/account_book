import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './login/user';
import { promise } from 'selenium-webdriver';
import { Token } from './login/token';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { Subject } from 'rxjs/Subject';
import { CookieService } from './cookie.service';
import { Account } from './money-manager/money-manager.component';
@Injectable()
export class RestApiService 
{
  private host = '/proxy/';
  private host1 ='/angular/';

  constructor(private http:Http,private cookieService:CookieService){}

  //获取请求头
  getHeaders (isSubmit = false): Headers 
  {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    if (isSubmit) 
    {
      header.append('Authorization', 'Token '+this.cookieService.get('Token'));
    }return header;
  }

  // 将form中的数据patch到服务端
  saveAccount(account:Account)
  {
    const url = this.host1+'account/saveaccount';
    const header = this.getHeaders();
    this.http.post(url,JSON.stringify(account),{headers:header}).toPromise().then()
    .catch(this.handleError);
  }

  //错误处理方法
  private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }


  //权限判断，这个可能存在问题
  doAuthorityManage():boolean
  {
    if(this.cookieService.check("Token"))
    {
       return true;
    }
    else
    {
      return false;
    }

  }
  
  //用户登录login 组件调用,返回一个token;
  login(user:User):Promise<Token>
  {
    console.log(user);
    const header = this.getHeaders();
    const url = this.host1+'account/login';
    return  this.http.post(url,JSON.stringify(user),{headers:header}).toPromise().then(res =>res.json() as Token)
    .catch(this.handleError);
  
  }
  getAccoutList()
  {
    const header = this.getHeaders();
    const url = this.host1+'myblog/index.do';
    this.http.get(url,{headers:header}).toPromise().then(res =>(console.log(res.json()))).catch(this.handleError);;
  }
}
