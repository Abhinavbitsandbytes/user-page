import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
{
  path: "",
  loadChildren: "./login/login.module#LoginModule",
},
{
  path : 'home',
  loadChildren: "./home/home.module#HomeModule"
},
{
  path : 'profile',
  loadChildren: "./profile/profile.module#ProfileModule"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
