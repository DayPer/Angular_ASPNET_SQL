import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from 'src/app/material/material.module';
import {MatTableModule} from "@angular/material/table";
import {UtilsModule} from 'src/app/utils/utils.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientComponent } from './client-add/client.component';
import { EditComponent } from './client-edit/edit.component';

@NgModule({
  declarations: [
    ClientComponent,
    EditComponent,
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
export class ClientModule {
}
