import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LazyLoadImageModule} from 'ng-lazyload-image';
import {
	MatFormFieldModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatDialogModule,
	MatDividerModule,
	MatInputModule,
	MatMenuModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatStepperModule,
	MatTabsModule,
	MatToolbarModule,
	MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
} from "@angular/material";




@NgModule({
	declarations: [
	],
	imports: [
		MatFormFieldModule,
		CommonModule,
		MatStepperModule,
		MatInputModule,
		MatSelectModule,
		MatCardModule,
		MatTabsModule,
		MatButtonModule,
		MatSelectModule,
		MatDividerModule,
		MatRippleModule,
		MatSidenavModule,
		MatSelectModule,
		MatDialogModule,
		MatToolbarModule,
		MatCheckboxModule,
		MatMenuModule,
		MatBottomSheetModule,
		MatRadioModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatSelectModule,
		MatAutocompleteModule,
        MatIconModule,
		MatDatepickerModule,
		LazyLoadImageModule,
	],
	exports: [
		MatFormFieldModule,
		MatCardModule,
		MatTabsModule,
		MatStepperModule,
		MatInputModule,
		MatSelectModule,
		MatButtonModule,
		MatDialogModule,
		MatSelectModule,
		MatDividerModule,
		MatSelectModule,
		MatSelectModule,
		MatSidenavModule,
		MatToolbarModule,
		MatCheckboxModule,
		MatMenuModule,
		MatRippleModule,
		MatBottomSheetModule,
		MatRadioModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatAutocompleteModule,
		MatIconModule,
		ReactiveFormsModule,
        FormsModule,
		MatDatepickerModule,
		LazyLoadImageModule
	],
	providers: [

	  ],
    
})
    export class SharedModule {}
