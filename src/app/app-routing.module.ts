import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineListingComponent } from './pages-components/medicine-listing/medicine-listing.component'

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
