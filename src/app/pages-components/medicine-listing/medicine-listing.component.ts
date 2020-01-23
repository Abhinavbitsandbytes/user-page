import { Component, OnInit, } from '@angular/core';
import { MedicineDataService } from '../../service/medicine-data.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-medicine-listing',
  templateUrl: './medicine-listing.component.html',
  styleUrls: ['./medicine-listing.component.css']
})
export class MedicineListingComponent implements OnInit {
  medicineList = []
  event_data: any;
  private _searchTerm: string
  public filteredEvents: any
  rangeForm: FormGroup;

  constructor(public medicine_service: MedicineDataService, private _router: Router, private _formBuilder: FormBuilder ) {
    this.medicine_service.getMedicineList().subscribe(data => {
      this.event_data = data['results'];
      this.filteredEvents = data['results']
      console.log(data)
    })
    this.rangeForm = this._formBuilder.group({
      startDate: [''],
      endDate: [''],
    });
  }


  get searchTerm(): string {
    return this._searchTerm;

  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEvents = this.filterEvents(value)
  }
  filterEvents(searchString: string) {
    if (this.event_data) {
      return this.event_data.filter(data =>
        data.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)

    }
  }
  setRange() {
    let startDate = new Date(this.rangeForm.get('startDate').value);
    let endDate = new Date(this.rangeForm.get('endDate').value);
    this.filteredEvents = this.event_data.filter(data => {
      data['release_date'] = new Date(data['release_date']);
      return (data['release_date'] > startDate && data['release_date'] < endDate)
    });
    
  }

  ngOnInit() {
   


  }


  getErrrorMessage(fieldName) {

    if (fieldName == 'medName') {

      return "Please enter your name"

    }
    else if (fieldName == 'medDescription') {

      return "Please enter Description"

    }
    else if (fieldName == 'quantity') {

      return "Please enter Qantity"

    }
    else if (fieldName == 'price') {

      return "Please enter Price"

    }

  }


}
