import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.css']
})
export class HolidaysListComponent implements OnInit {

holidaysList: Array<any> = [];

    constructor(private http: Http,private router: Router) {

    }
    ngOnInit() {
        this.http.get('year=2015')
            .subscribe(
                (holidaysList: any) => {                	
                    this.holidaysList = holidaysList.json().holidays;                    
                }
            )
    }   

}
