import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent} from './cart.component';
import {CartComponentRouterModule} from './cart-router.module';

@NgModule({
  imports: [
    CommonModule,
    CartComponentRouterModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
