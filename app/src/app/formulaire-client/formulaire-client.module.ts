import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormulaireClientComponent} from './formulaire-client.component';
import {FormsModule} from '@angular/forms';
import {FormulaireClientRouterModule} from './formulaire-client-router.module';

@NgModule({
  imports: [
    CommonModule,
    FormulaireClientRouterModule,
    FormsModule,
  ],
  declarations: [FormulaireClientComponent]
})
export class FormulaireClientModule { }
