import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Equipe } from '../model/equipe';

import { etudiants } from '../model/etudiants';
import { stats } from '../model/stats';
import { stades } from '../model/stade';


@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  public url=environment.urlG+'/EquipeController/'
  public urlStad=environment.urlG+'/StadeController/'
  public urlEtud=environment.url+'DisplayStudents'



  public urlAff=this.url+'displayEquipes/'
  public urlAdd=this.url+'addEquipe/' 
  public urlGet=this.url+'displayEquipeById/' 
  public urlUpd=this.url+'updateEquipe/'
  public urlDel=this.url+'deleteEquipe/'
  public urlStud=this.url+'getAllEtudiantsfrom1Equipe/' 
  public urlStats=this.url+'countequipeparetudiant/' 
  public urlfav=this.url+'favorite/'
  public urlunfav=this.url+'unfavorite/' 
  public urlmyfav=this.url+'myfavorites/' 
  public urlaffect=this.url+'assignEquipeEtudiant/' 


  public urldispStad=this.urlStad+'displayStades/'
  public urlAddStad=this.urlStad+'addStade/' 



  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get<Equipe[]>(this.urlAff)
  }
  addEquipe(e:Equipe){
    return this.http.post(this.urlAdd,e)
  }
  getEquipeById(id:number){
    return this.http.get<Equipe>(this.urlGet+id)
  }
  UpdateEquipe(e: Equipe){
    return this.http.put(this.urlUpd,e)
  }
  DeleteEquipe(id: number){
    return this.http.delete(this.urlDel+id)
  }
  getStudEquipe(id: number){
    return this.http.get<etudiants[]>(this.urlStud+id)
  }
  getAllStats(){
    return this.http.get<stats[]>(this.urlStats)
  }
  fav(id:number){
    console.log(  id
    );
    return this.http.put(this.urlfav+id,null)
  }
  unfav(id:number){
    return this.http.put(this.urlunfav+id,null)
  }
  getAllfav(){
    return this.http.get<Equipe[]>(this.urlmyfav)
  }
  getAllStads(){
    return this.http.get<stades[]>(this.urldispStad)
  }
  addStad(s:stades){
    return this.http.post(this.urlAddStad,s)
  }
  getAllStud(){
    return this.http.get<etudiants[]>(this.urlEtud)
  }
  affect(id:number,id2:number){
    return this.http.put(this.urlaffect+id+'/'+id2,null)
  }
}
