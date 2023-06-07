import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../model/department';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  public  url_apilist= environment.urlDep ;
 getallquery='displayalldepartment'
  constructor(private httpClient :HttpClient) {
    console.log(this.url_apilist);

   }

  getDepartments():Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.url_apilist+this.getallquery}`);
  }
  geDepartmentById(id : number):Observable <Department>{
    return this.httpClient.get<Department>(this.url_apilist+'displdepartmentbyid/'+id);

  }
  addDepartment(department : any):Observable <any>{
    return this.httpClient.post<any>(this.url_apilist+'addDepartment',department);
  }
  updateDepartment(id:number,department : any):Observable <any>{
    return this.httpClient.put<any>(this.url_apilist+'updatedepartment/'+id,department);
  }
  deleteDepartment(id : any):Observable <any>{
    console.log(id)
    return this.httpClient.delete<any>(this.url_apilist+'DeleteDepartment/'+id);
  }
  getEnseignantsByDepartment(id : any):Observable <any>{
    return this.httpClient.get<any>(this.url_apilist+'GetListOfEnseignantByDepartment/'+id);
  }
}