import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogueComponent} from './catalogue.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CatalogueRouterModule} from './catalogue-router.module';

@NgModule({
  imports: [
    CommonModule,
    CatalogueRouterModule,
    ReactiveFormsModule
  ],
  declarations: [CatalogueComponent]
})
export class CatalogueModule { }
