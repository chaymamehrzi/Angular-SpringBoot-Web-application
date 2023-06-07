import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { etudiants } from 'src/app/core/model/etudiants';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-item-etudiant',
  templateUrl: './item-etudiant.component.html',
  styleUrls: ['./item-etudiant.component.css']
})
export class ItemEtudiantComponent implements OnInit {
  role: String; 
  result:any;
  // from parent to child
  @Input() etudiant: any; 
  
  @Output() deleteEtudiant=new EventEmitter<any>();
  
  constructor(private userserv:LoginService) { 

   this.role= this.userserv.getUserRole();
   if(this.role=='ADMIN'){
    this.result='ADMIN';
   }
   if(this.role=="STUDENT"){
    this.result=this.userserv.getUser().etudiant.idEtudiant;
   }
  
    
  }

  ngOnInit(): void {
   
  }
  delete(){
    this.deleteEtudiant.emit(this.etudiant);
  }
 

  
  
   
}
