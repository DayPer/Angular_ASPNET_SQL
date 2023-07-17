import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesTableComponent} from './activities-table/activities-table.component';
import {MaterialModule} from "../../material/material.module";
import {MatTableModule} from "@angular/material/table";
import {UtilsModule} from "../../utils/utils.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ActivitiesTableComponent,

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
export class ActivitiesModule {
}
