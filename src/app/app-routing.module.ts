import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { facebookGuard } from './guard/facebook.guard';
import { RegisterComponent } from './Component/register/register.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  canActivate:[facebookGuard]
},{
path:'login',
component:LoginComponent   
// component:RegisterComponent
},{
  path:'register',
  component:RegisterComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
