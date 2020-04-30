import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchflightComponent } from './searchflight/searchflight.component';


const routes: Routes = [
   {path:"registration",component:RegistrationComponent},
   {path:"searchflight",component:SearchflightComponent},
   {path:"",component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
