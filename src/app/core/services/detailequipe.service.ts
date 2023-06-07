import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { detailequipes } from '../model/detailequipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailequipeService {
  public url=environment.urldet;
  public urlAdd=this.url+'AddDetailEquipe' 
public urlAff = this.url+'detailEquipes'
public urlDel = this.url+'DeleteDetailEquipe/'
public urlupdate= this.url+'UpdateDetailEquipe/'
  constructor(private http :HttpClient) { 
    
  }
  
  addDetailequipe(d:detailequipes) {
    console.log(this.urlAdd);
    console.log(d);
    return this.http.post(this.urlAdd,d) 
  }

  getAlldetails(){
    return this.http.get<detailequipes[]>(this.urlAff)
  }
  
  deleteDepartment(id : any):Observable <any>{
    console.log(id)
    return this.http.delete<any>(this.urlDel+id);
  }
  updateDetailequipe(detailEquipes : detailequipes):Observable <any>{
    return this.http.put<any>(this.urlupdate,detailEquipes);
  }
}
