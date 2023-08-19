import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { OrdersComponent } from './modules/orders/orderList/orders.component';
import { SearchComponent } from './modules/search/searchList/search.component';
import { ProductsComponent } from './modules/products/productsList/products.component';
import { ClientComponent } from './modules/client/client-add/client.component';
import { ClientListComponent } from './modules/client/client-list/client-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'client', component: ClientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
