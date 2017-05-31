import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from "./http.factory";
import { Routes, RouterModule } from '@angular/router';
import {MdListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdNativeDateModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';
import { KeysPipe } from './pipes/keys';
import { DayInfoListComponent } from './day-info-list/day-info-list.component';



//routers for this app

const appRoutes: Routes = [
  { path: 'usaHolidaysList', component: HolidaysListComponent },
  { path: 'dayInfo/:dateInfo', component: DayInfoListComponent },
  {
    path: '**',
    redirectTo: 'usaHolidaysList'    
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HolidaysListComponent,
    KeysPipe,
    DayInfoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule, MdNativeDateModule,
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
