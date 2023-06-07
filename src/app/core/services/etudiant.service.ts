import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../model/department';
import { etudiants } from '../model/etudiants';
import { DepartmentsService } from './departments.service';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
 public  url_apilist= environment.url ;
 getallquery='DisplayStudents' ;
 filter='existenceByName/';
 affectedepst='assignetudianttodepartment/';
  constructor(private httpClient :HttpClient) {
    console.log(this.url_apilist);

   }
  getEtudiantsListe():Observable<etudiants[]>{
    return this.httpClient.get<etudiants[]>(`${this.url_apilist+this.getallquery}`);
  }
  geEtudiantById(id : number):Observable <etudiants>{
    return this.httpClient.get<etudiants>(this.url_apilist+'DisplayEtudiantById/'+id);
  }
  getEtudiantFiltredbyname(name:String):Observable<etudiants[]>{
    return this.httpClient.get<etudiants[]>(`${this.url_apilist+this.filter+name}`);
  }
  getEtudiantByDepartment(id:number):Observable<etudiants[]>{
    return this.httpClient.get<etudiants[]>(`${'http://localhost:8089/SpringMVC/DepartmentController/GetListOfEtudiantsByDepartment/'+id}`);
  }
 addEtudiant(e:etudiants){
    return this.httpClient.post(this.url_apilist+'ajouterEtudiant',e)
}
updateEtudiant(e:etudiants){
  return this.httpClient.put(this.url_apilist+'updateStudentById',e)
}
deleteEtudiantByID(id:number ){
   return this.httpClient.delete(this.url_apilist+'deletestudent/'+id);
   console.log(id);
}
getDepartments():Observable<Department[]>{
  return this.httpClient.get<Department[]>(`${'http://localhost:8089/SpringMVC/DepartmentController/displayalldepartment'}`);
}
affecterEtudiantToDepartment(iddep:number,ids:number){
  return this.httpClient.put<any>(this.url_apilist+this.affectedepst + ids + '/' + iddep, {});
}
}