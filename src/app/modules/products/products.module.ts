import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../material/material.module";
import {MatTableModule} from "@angular/material/table";
import {UtilsModule} from "../../utils/utils.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductsComponent } from './productsList/products.component';

@NgModule({
  declarations: [
    ProductsComponent,

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
export class ProductsModule {
}
