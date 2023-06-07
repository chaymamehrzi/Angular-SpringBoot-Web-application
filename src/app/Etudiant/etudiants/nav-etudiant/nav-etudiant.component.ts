import { Component, Injectable, OnInit } from '@angular/core';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-nav-etudiant',
  templateUrl: './nav-etudiant.component.html',
  styleUrls: ['./nav-etudiant.component.css']
})

export class NavEtudiantComponent implements OnInit {
  public filtredlist :etudiants[] ;
  critereage :number;
  constructor(private etudiantService :EtudiantService) {
    
   }

  ngOnInit(): void {
    
    }
    
   
   
  
  

}
