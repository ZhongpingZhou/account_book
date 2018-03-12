import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule/*表单校验*/ }    from '@angular/forms'; // <-- NgModel lives here
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {MatInputModule} from '@angular/material/input';
import { AppComponent }  from './app.component';
import { RestApiService } from './rest-api.service';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule }   from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GuardService } from './guard-service.service';
import { CookieService } from './cookie.service';
import { MoneyManagerComponent } from './money-manager/money-manager.component';
@NgModule
({
  imports: [
    BrowserModule,
    FormsModule, 
    NoopAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent 
      },
      
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path:'header',
        component:HeaderComponent,
      },
      {
        path:'money_manager',
        component:MoneyManagerComponent,
        // canActivate: [GuardService]
      }
    ]),
    MatInputModule,
    MatButtonModule,
    HttpModule,
  ],
  declarations: [
    AppComponent, LoginComponent,HeaderComponent, MoneyManagerComponent
  ],
  providers:[RestApiService,GuardService,CookieService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
