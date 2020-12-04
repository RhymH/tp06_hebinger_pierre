import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogueComponent} from './catalogue.component';


const routes: Routes = [
  {
    //ne rien mettre dans path !
    path: '',
    component: CatalogueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRouterModule { }
