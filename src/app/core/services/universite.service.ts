import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Universite} from "../model/universite";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  public  url_list= environment.url_u ;
  public univ : Universite;
  getalluniversities='displayUniversities'
  constructor(private httpClient :HttpClient) {
  }
  getlistuniversities():Observable<Universite[]>{
    return this.httpClient.get<Universite[]>(`${this.url_list+this.getalluniversities}`);
  }

  getUniversityById(id : number):Observable <Universite>{
    return this.httpClient.get<Universite>(this.url_list+'displayUniversityBYId/'+id);
  }

  addUniversite(univ:Universite){
    return this.httpClient.post(this.url_list+'addUniversity',univ)
  }
  updateUniversite(univ:Universite){
    return this.httpClient.put(this.url_list+'updateUniversity',univ)
  }
  addDep(iduniv:number ,iddep:number){
    // @ts-ignore
    return this.httpClient.put(this.url_list+'assignuniversityToDepartment/'+iduniv +'/'+iddep);

  }
  univDelete(iduniv:number ){
    // @ts-ignore
    return this.httpClient.delete(this.url_list+'deleteUniv/'+iduniv );

  }
  private univUp = new BehaviorSubject({}as Universite);
  univUp$ = this.univUp.asObservable();
  assignUniv(univUp:any){
    this.univUp.next(univUp);
  }

}

