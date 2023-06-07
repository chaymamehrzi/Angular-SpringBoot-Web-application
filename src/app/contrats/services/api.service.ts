import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IArchivePercentType } from '../Model/ArchivePercentType';
import { Student } from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = environment.urlCont + '/ContartController/';
  public urlAff = this.url + 'displayallcontrats/';
  public urlAdd = this.url + 'newContrat';
  public urlUpdate = this.url + 'updateContrat/';
  public urlDel = this.url + 'deleteContrat/';
  public urlACTS = this.url + 'assignContratToEtudiantByID/';
  public urlAffStudent = environment.urlCont + '/controllerEtudiant/DisplayStudents';
  public urlexport = this.url + 'export/pdf';




  constructor(private http: HttpClient) { }

  postContrat(data: any) {
    console.log(data)
    //return this.http.post<any>("http://localhost:3000/listContrats/", data)
    return this.http.post<any>(this.urlAdd, data)

  }
  getContrat() {
    //return this.http.get<any>("http://localhost:3000/listContrats/")
    return this.http.get<any>(this.urlAff);
  }
  //  updateContrat(data: any, id: number) {
  //return this.http.get<any>("http://localhost:3000/listContrats/")
  //  return this.http.put<any>(this.urlUpdate + id, data);
  //}
  updateContrat(data: any) {
    return this.http.put<any>(this.urlUpdate, data);
  }

  DelContrat(id: number) {
    //return this.http.get<any>("http://localhost:3000/listContrats/")
    return this.http.delete<any>(this.urlDel + id);
  }
  AddContratToStudent(idC: number, idE: number) {
    return this.http.put<any>(this.urlACTS + idC + '/' + idE, {});

  }

  getStudents() {
    return this.http.get<Student[]>(this.urlAffStudent);
  }

  exportPdfContrats(): Observable<Blob> {
    return this.http.get(this.urlexport, { responseType: 'blob' });
  }

  // ContratArchiveStats
  getStats(): Observable<Array<IArchivePercentType>> {
    return this.http
      .get<Array<IArchivePercentType>>(
        'http://localhost:8089/SpringMVC/ContartController/vData/percentArchiveStatus'
      )
      .pipe(map((d: Array<IArchivePercentType>) => d));
  }

}
