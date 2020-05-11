import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFlightService {
  
  constructor(private http:HttpClient) { 
  }

  public registerNow(user:Register){
    console.log(user);
    return this.http.post<Register>("http://localhost:9194/flights/RegPage",user,{responseType:'text' as 'json'});
  }
  
  public getSearchFlights(SearchFlight:Flight) {
console.log(SearchFlight)
    return this.http.get("http://localhost:9193/flights/SearchFlights/"+SearchFlight.fromloc+"/"+SearchFlight.toloc+"/"+SearchFlight.date1,{responseType: 'json'});
  }

}
export class Register {
  userid:number;
  username:string;
  password:string;
  confirmpassword:string;
  mailid:string;
  phnnumber:string;
  
}
export class Flight {
  flightNumber:number;
    flightName:string;
    fromloc:string;
    toloc:string;
    seatCapacity:number;
    costPerSeat:number;
    date1:Date;
    constructor(flightNumber:number,flightName:string,fromloc:string,toloc:string,seatCapacity:number,costPerSeat:number,date1:Date)
     {
      this.flightNumber=flightNumber;
      this.flightName=flightName;
       this.fromloc=fromloc;
       this.toloc=toloc;
       this.seatCapacity=seatCapacity;
       this.costPerSeat=costPerSeat;
      this.date1=date1;
     }
}