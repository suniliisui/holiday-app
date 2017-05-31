import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-day-info-list',
  templateUrl: './day-info-list.component.html',
  styleUrls: ['./day-info-list.component.css']
})
export class DayInfoListComponent implements OnInit {

  constructor(private http: Http,private activatedRoute: ActivatedRoute) { }
	dayInfoList: any = {};
	selectedDate: any = {};
	  ngOnInit() {
	  	this.activatedRoute.params.subscribe(params => {
	          if (params['dateInfo']){
	            this.selectedDate = params['dateInfo'];
	            this.showDayInfo();           
	          }
	        });
	  }

	  
   showDayInfo(){
      var d = new Date(this.selectedDate);
      var selectedYear = d.getFullYear(); 
      var selectedMonth = d.getMonth()+1;// 0  to 11
      var selectedDay = d.getDate(); // 0 to 30
      var dateFormate = this.selectedDate.split("-");
      console.log(dateFormate);
      this.http.get('year='+dateFormate[0]+'&month='+dateFormate[1]+'&day='+dateFormate[2])
            .subscribe(
                (dayInfoList: any) => {                  
                    this.dayInfoList = dayInfoList.json().holidays;                    
                }
            )
    }
}
