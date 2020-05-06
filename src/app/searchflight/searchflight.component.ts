import { Component, OnInit } from '@angular/core';
import {  UserFlightService, Flight } from '../user-flight.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
 searchs: Flight[];
  
  constructor(private service: UserFlightService) { }
  Submit(SearchFlight:Flight) {
console.log(SearchFlight);
    this.service.getSearchFlights(SearchFlight).subscribe(

      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.searchs = response;
    console.log(this.searchs);
  }
  ngOnInit() {
  }
}


