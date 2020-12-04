import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecapComponent} from './recap.component';


const routes: Routes = [
  {
    //ne rien mettre dans path !
    path: '',
    component: RecapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecapRouterModule { }
