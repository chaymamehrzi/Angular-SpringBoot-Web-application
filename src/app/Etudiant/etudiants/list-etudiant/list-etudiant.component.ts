import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { ItemEtudiantComponent } from '../item-etudiant/item-etudiant.component';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavEtudiantComponent } from '../nav-etudiant/nav-etudiant.component';
import { LoginService } from 'src/app/core/services/login.service';
@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})

export class ListEtudiantComponent implements OnInit {
  public listetudiants :etudiants[];
  public filredliste: etudiants[];
  public list :etudiants[]; 
  searchText: any; 
  age:number; 
  critereage :number;
  role:String;
  constructor(private etudiantService : EtudiantService,private route:Router,private current:ActivatedRoute,public dialog:MatDialog,private loginserv:LoginService) {
    this.role=loginserv.getUserRole();
   }

   openDialog(): void {
    let dialogRef = this.dialog.open(NavEtudiantComponent, {
      width: '300',
      data: { name: this.critereage }
    });

   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.critereage=result;
      
    });


   
  }




  ngOnInit(): void {
    this.etudiantService.getEtudiantsListe().subscribe(
      data =>{
      this.listetudiants=data; 
    })

  }



  DeleteEtudiant(item:any){
    let i = this.listetudiants.indexOf(item);
    console.log(i);
    console.log(item.idEtudiant);
    this.etudiantService.deleteEtudiantByID(item.idEtudiant).subscribe(
      ()=>{console.log("done");this.listetudiants.splice(i,1)
    }

    )
   }
   
  

}
