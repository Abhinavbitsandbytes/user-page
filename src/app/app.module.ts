import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule, MatIconModule, MatDatepickerModule } from '@angular/material';
import { DateFormat } from './date-format';
import { MatNativeDateModule, DateAdapter, } from '@angular/material';
import { SharedModule} from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    // MatIconModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatDialogModule,
    // MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{ provide: DateAdapter, useClass: DateFormat },],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in');
  }
}
