import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from "./http.factory";
import { Routes, RouterModule } from '@angular/router';
import {MdListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';




//routers for this app

const appRoutes: Routes = [
  { path: 'usaHolidaysList', component: HolidaysListComponent },
  {
    path: '**',
    redirectTo: 'usaHolidaysList'    
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HolidaysListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MdListModule,
    BrowserAnimationsModule
  ],
  providers: [
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
