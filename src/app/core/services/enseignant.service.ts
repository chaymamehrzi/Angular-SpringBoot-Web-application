import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enseignant } from '../model/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  public  url_apilist= environment.urlEns ;
 getallquery='displayallEnseignant'
  constructor(private httpClient :HttpClient) {
    console.log(this.url_apilist);

   }

  getEnseignants():Observable<Enseignant[]>{
    return this.httpClient.get<Enseignant[]>(`${this.url_apilist+this.getallquery}`);
  }
  geEnseignantById(id : number):Observable <Enseignant>{
    return this.httpClient.get<Enseignant>(this.url_apilist+'displEnseignantbyid/'+id);

  }
  addEnseignant(enseignant : any):Observable <any>{
    return this.httpClient.post<any>(this.url_apilist+'addEnseignant',enseignant);
  }
  updateEnseignant(id:number,enseignant : any):Observable <any>{
    return this.httpClient.put<any>(this.url_apilist+'updateEnseignant/'+id,enseignant);
  }
  deleteEnseignant(id : any):Observable <any>{
    console.log(id)
    return this.httpClient.delete<any>(this.url_apilist+'DeleteEnseignant/'+id);
  }
  getEnseignantsByDepartment(id : any):Observable <any>{
    return this.httpClient.get<any>(this.url_apilist+'GetListOfEnseignantByDepartment/'+id);
  }
}
