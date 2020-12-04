import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RecapComponent} from './recap.component';
import {RecapRouterModule} from './recap-router.module';
import {PipeTelephone} from '../modules/telephone.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecapRouterModule
  ],
  declarations: [RecapComponent, PipeTelephone]
})
export class RecapModule { }
