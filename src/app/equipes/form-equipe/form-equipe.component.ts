import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { Router, ActivatedRoute } from '@angular/router';

import * as internal from 'stream';
import { etudiants } from 'src/app/core/model/etudiants';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css']
})
export class FormEquipeComponent implements OnInit {
    public listS: etudiants[];
    public listSS: etudiants[];

    public listE: Equipe[];

    private equipeService: EquipeService;
    public equipe: Equipe;
    public etudiants: etudiants;
    public action: string;
    public id : number;
    selectedLevel: etudiants;
  constructor(private equipeservice: EquipeService,
    private router:Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.equipeservice.getAllStud().subscribe(
      (X:etudiants[])=>{
        this.listSS = X;
      }
    )
    this.equipeservice.getAllProduct().subscribe(
      (X:Equipe[])=>{
        this.listE = X;
      }
    )
     this.id= this.currentRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id!=null){
      //update
      
      this.action="update";
      this.equipeservice.getEquipeById(this.id).subscribe(
        (object : Equipe)=> this.equipe=object
      )
        console.log(this.equipe)
        console.log(this.id)
      }else
      { this.action="add";
        this.equipe = new Equipe();
      }
      this.equipeservice.getStudEquipe(this.id).subscribe(
        (X:etudiants[])=>{
          this.listS = X;
        }
      )
      this.selectedLevel =this.listS[0];

    }

  saveEquipe(){
    if(this.action=='add')
    {
    //this.productService.list.push(this.product);
    this.equipeservice.addEquipe(this.equipe).subscribe(
     ()=>{ this.router.navigate(['/equipes'])}
    )
    }
    else {
      this.equipe.idEquipe=this.id;
      this.equipeservice.UpdateEquipe(this.equipe).subscribe(
       ()=>{ this.router.navigate(['/equipes'])}
      )
    }
  }
  deleteEquipe(){
    this.equipeservice.DeleteEquipe(this.id).subscribe(
      ()=>{ this.router.navigate(['/equipes'])}
    )
  }
  refresh(){
    this.equipeservice.getAllStud().subscribe(
      (X:etudiants[])=>{
        this.listSS = X;
      }
    )
  }

  afffect(){

    this.equipeservice.affect(this.id,this.selectedLevel.idEtudiant).subscribe(
      ()=>{ this.router.navigate(['/equipes'])}

    )
    console.log("id etudiant"+this.selectedLevel.idEtudiant)
    console.log("id equipe ",this.id)
}

}
