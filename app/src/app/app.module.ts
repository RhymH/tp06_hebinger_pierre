import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NgxsModule } from '@ngxs/store';
import {ArticlesState} from './modules/states/articles-state';
import {AppRouterModule} from './modules/rooter/app-router';
import { HomeComponent } from './home/home.component';
import {EqualValidator} from './modules/equal-validator.directive';
import {FormulaireClientModule} from './formulaire-client/formulaire-client.module';
import {CatalogueModule} from './catalogue/catalogue.module';
import {DetailsModule} from './details/details.module';
import {CartModule} from './cart/cart.module';
import {RecapModule} from './recap/recap.module';
import { LoginComponent } from './login/login.component';
import {LoginModule} from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TetiereComponent,
    HomeComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    NgxsModule.forRoot([ArticlesState]),
    FormulaireClientModule,
    CatalogueModule,
    DetailsModule,
    CartModule,
    RecapModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
