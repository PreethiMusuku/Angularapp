import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UserFlightService } from './user-flight.service';
import { RegistrationComponent } from './registration/registration.component';
import { SearchflightComponent } from './searchflight/searchflight.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    BrowserModule
  ],
  providers: [HttpClient,UserFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
