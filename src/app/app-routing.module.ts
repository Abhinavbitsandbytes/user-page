import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth.guard'

const routes: Routes = [
 
{
  path: "",
  loadChildren: "./login/login.module#LoginModule",
},
{
  path : 'home',
  loadChildren: "./home/home.module#HomeModule",
  canActivate: [AuthGuard]
},
{
  path : 'profile',
  loadChildren: "./profile/profile.module#ProfileModule",
  canActivate: [AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
