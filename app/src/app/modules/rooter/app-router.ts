
import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { HomeComponent} from '../../home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalogue', loadChildren: () => import('../../catalogue/catalogue.module').then(m => m.CatalogueModule)},
  {path: 'cart', loadChildren: () => import('../../cart/cart.module').then(m => m.CartModule)},
  {path: 'details/:id', loadChildren: () => import('../../details/details.module').then(m => m.DetailsModule)},
  {path: 'client', loadChildren: () => import('../../formulaire-client/formulaire-client.module').then(m => m.FormulaireClientModule)},
  {path: 'recap', loadChildren: () => import('../../recap/recap.module').then(m => m.RecapModule)},
  {path: 'login', loadChildren: () => import('../../login/login.module').then(m => m.LoginModule)},
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
