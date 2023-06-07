import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  public  url_apilist= environment.url ;
  
  constructor( private http:HttpClient) { 

  }

  getEtudiantsAges():Observable<number[]>{
  return  this.http.get<number[]>(`${this.url_apilist+'getAllEtudiantsAges'}`)
  }
}
