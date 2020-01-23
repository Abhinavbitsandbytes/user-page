import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../service/movie-service.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie_data: any;
  private _searchTerm: string
  public filteredData: any
  rangeForm: FormGroup;
  constructor(private _movieServiceService: MovieServiceService, private _router: Router, private _formBuilder: FormBuilder) {
    this._movieServiceService.getMovieList().subscribe(data => {
      this.movie_data = data['results'];
      this.filteredData = data['results']
    })
    this.rangeForm = this._formBuilder.group({
      startDate: [''],
      endDate: [''],
    });
  }
  ngOnInit() {
  }
  get searchTerm(): string {
    return this._searchTerm;

  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredData = this.filterEvents(value)
  }
  filterEvents(searchString: string) {
    if (this.movie_data) {
      return this.movie_data.filter(data =>
        data.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
    }
  }
  setRange() {
    if (this.rangeForm.valid) {
      let startDate = new Date(this.rangeForm.get('startDate').value);
      let endDate = new Date(this.rangeForm.get('endDate').value);
      this.filteredData = this.movie_data.filter(data => {
        data['release_date'] = new Date(data['release_date']);
        return (data['release_date'] > startDate && data['release_date'] < endDate)
      });
    }
  }
  handleProfile() {
    this._router.navigate(['/profile'])
  }

}
