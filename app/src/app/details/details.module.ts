import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsComponent} from './details.component';
import {DetailsRouterModule} from './details-router.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsRouterModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule { }
