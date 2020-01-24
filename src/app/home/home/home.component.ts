import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../service/movie-service.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
const imageBaseUrl="https://image.tmdb.org/t/p/w500"
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
  movies_title: [];
  imdb_ratings = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      data: this.imdb_ratings, label: 'Rating', backgroundColor: 'rgba(79, 255, 195, 1)', hoverBackgroundColor: 'rgba(79, 255, 195, 1)'
    },
  ];
  constructor(private _movieServiceService: MovieServiceService, private _router: Router, private _formBuilder: FormBuilder) {
    this._movieServiceService.getMovieList().subscribe(data => {
      this.movie_data = data['results'];
      this.filteredData = data['results']
      this.movies_title = this.movie_data.map(content => content.title);
      this.imdb_ratings = this.movie_data.map(content => content.vote_average);
      this.barChartData[0].data = this.imdb_ratings;
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
      this.filteredData = this.filteredData.filter(data => {
        data['release_date'] = new Date(data['release_date']);
        return (data['release_date'] > startDate && data['release_date'] < endDate)
      });
    }
  }
  handleProfile() {
    this._router.navigate(['/profile'])
  }
  getImage(endUrl) {
    return (imageBaseUrl + endUrl)
  }
}
