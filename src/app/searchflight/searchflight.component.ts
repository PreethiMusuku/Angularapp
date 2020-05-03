import { Component, OnInit } from '@angular/core';
import {  UserFlightService, Flight } from '../user-flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
searchs: Flight[];
  fromloc: string = "";
  toloc: string = "";
  date1: Date;
  //input:Flight=new Flight(0,"","","",0,0,"");
  constructor(private service: UserFlightService) { }
  fetch(fromloc, toloc, date1) {
    console.log(fromloc + toloc + date1);
    this.service.getSearchFlights(fromloc, toloc, date1).subscribe(
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


