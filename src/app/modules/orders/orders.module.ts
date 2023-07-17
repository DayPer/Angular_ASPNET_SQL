import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../material/material.module";
import {MatTableModule} from "@angular/material/table";
import {UtilsModule} from "../../utils/utils.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrdersComponent } from './orderList/orders.component';

@NgModule({
  declarations: [
    OrdersComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    UtilsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OrdersModule {
}
