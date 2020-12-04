import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {LoginClientRouterModule} from './login-router';

@NgModule({
  imports: [
    CommonModule,
    LoginClientRouterModule,
    FormsModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
