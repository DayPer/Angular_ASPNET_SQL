import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivitiesTableComponent} from "./modules/activities/activities-table/activities-table.component";
import { HomeComponent } from './modules/home/home.component';
import { OrdersComponent } from './modules/orders/orderList/orders.component';
import { SearchComponent } from './modules/search/searchList/search.component';
import { ProductsComponent } from './modules/products/productsList/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  // {path: 'activities', component: ActivitiesTableComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
