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
  
  public getSearchFlights(fromloc,toloc,date1){
console.log(fromloc,toloc,date1)
    return this.http.get<Flight>("http://localhost:9193/flights/SearchFlights/"+fromloc+"/"+toloc+"/"+date1,{responseType: 'json'});
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
    flightName:String;
    fromloc:String;
    toloc:String;
    seatCapacity:number;
    costPerSeat:number;
    date1:Date;
     constructor(flightNumber:number,flightName:String,fromloc:String, toloc:String,seatCapacity:number, costPerSeat:number,date1:Date)
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