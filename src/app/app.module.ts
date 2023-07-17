import { NgModule, InjectionToken } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {MatNativeDateModule} from '@angular/material/core';
import {ActivitiesModule} from "./modules/activities/activities.module";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './modules/home/home.component';
import { TOTALPRICE } from 'src/app/utils/injection.token';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    ActivitiesModule
  ],
  providers: [{
    provide: TOTALPRICE,
    useValue: '0'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
