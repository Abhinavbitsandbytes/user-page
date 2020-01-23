import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from '../home/home/home.component'
import { HomeRoutingModule} from './home-routing.module'
import { SharedModule} from '../shared/shared.module'
@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		HomeRoutingModule,
		CommonModule,
		SharedModule 
	],
	providers: [],
})
export class HomeModule {}