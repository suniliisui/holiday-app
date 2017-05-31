import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.css']
})
export class HolidaysListComponent implements OnInit {

holidaysList: Array<any> = [];
    constructor(private http: Http) {

    }
    ngOnInit() {
        this.http.get('holidays?key=fe40f388-684d-4da4-9696-83b4e02ab09e&country=US&year=2015')
            .subscribe(
                (holidaysList: any) => {                	
                    this.holidaysList = holidaysList.json().holidays;
                    console.log(this.holidaysList);
                }
            )
    }

}
