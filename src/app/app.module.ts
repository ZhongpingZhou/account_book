import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule/*表单校验*/ }    from '@angular/forms'; // <-- NgModel lives here
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {MatInputModule} from '@angular/material/input';
import { AppComponent }  from './app.component';
import { RestApiService } from './rest-api.service';
// import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';

import {MatSelectModule} from '@angular/material/select';

import {MatDialogModule} from '@angular/material/dialog';


import {MatMenuModule} from '@angular/material/menu';

import { RouterModule }   from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GuardService } from './guard-service.service';
import { FormComponent } from './form/form.component';
import { CookieService } from './cookie.service';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialog/dialog.component';

@NgModule({
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
        path: 'form',
        component:FormComponent,
        canActivate: [GuardService]
      },
      {
        path:'dialog',
        component:DialogOverviewExample,
        canActivate: [GuardService]

      },
      {
        path:'header',
        component:HeaderComponent,
        canActivate: [GuardService]
      }
    ]),
    

    
    MatInputModule,
    MatButtonModule,


    HttpModule,
    
  ],

  entryComponents: [DialogOverviewExampleDialog],
  declarations: [
    AppComponent, LoginComponent,  FormComponent,DialogOverviewExampleDialog,HeaderComponent
  ],
  providers:[RestApiService,GuardService,CookieService,DialogOverviewExample],
  bootstrap: [AppComponent ]
})
export class AppModule { }
