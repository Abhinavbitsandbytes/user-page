import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
const baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=4b10cf2f8e6ed1fcb506bd3929ecee40&language=en-US&page=1'
@Injectable({
  providedIn: 'root'
})
export class MedicineDataService {

  constructor(private http: HttpClient) { }
  

  getMedicineList()   {
 return this.http.get(baseUrl)

}



}
