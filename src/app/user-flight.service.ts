import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFlightService {
  
users:Flight[]=[];
  constructor(private http:HttpClient) { 
  }

  public registerNow(user:Register){
    console.log(user);
    return this.http.post<Register>("http://localhost:9194/flights/RegPage",user,{responseType:'text' as 'json'});
  }
  
  public getUsers(){

    return this.http.get<Flight>("http://localhost:9193/flights/findAllflights");
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
  filter: any;
    constructor(flightNumber:number,flightName:String,fromloc:String, toloc:String,seatCapacity:number, costPerSeat:number)
    {
      this.flightNumber=flightNumber;
      this.flightName=flightName;
      this.fromloc=fromloc;
      this.toloc=toloc;
      this.seatCapacity=seatCapacity;
      this.costPerSeat=costPerSeat;
    }
}