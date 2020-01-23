import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileRoutingModule} from './profile-routing.module'
import { SharedModule} from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component'



@NgModule({
	declarations: [
		ProfileComponent
	],
	imports: [
		ProfileRoutingModule,
		CommonModule,
		SharedModule 
	],
	providers: [],
})
export class ProfileModule {}