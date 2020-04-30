import { Component, OnInit } from '@angular/core';
import { Flight, UserFlightService } from '../user-flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

    users:Flight;
    fromloc:string;
    toloc:string;
    constructor(private service:UserFlightService) { }
    Search() {
      this.users=this.users.filter(res=>
        {
return res.fromloc.toLocaleLowerCase().match(this.fromloc.toLocaleLowerCase());
        });
    }
    Searchnow() {
      this.users=this.users.filter(res=>
        {
return res.toloc.toLocaleLowerCase().match(this.toloc.toLocaleLowerCase());
        });
    }
    ngOnInit() {
      console.log(this.users);
      let resp=this.service.getUsers();
      resp.subscribe((data)=>this.users=data);
    }
}
  