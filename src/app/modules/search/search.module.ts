import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../material/material.module";
import {MatTableModule} from "@angular/material/table";
import {UtilsModule} from "../../utils/utils.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './searchList/search.component';

@NgModule({
  declarations: [
    SearchComponent,

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
export class SearchModule {
}
