import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-etudiantequipes',
  templateUrl: './etudiantequipes.component.html',
  styleUrls: ['./etudiantequipes.component.css']
})
export class EtudiantequipesComponent implements OnInit {
 id:number;
 etudiant: etudiants;
 displayedColumns: string[] = ['nomEquipe','niveau','logo','fav'];
 dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
  constructor(private currentroute:ActivatedRoute,private serviceetudiant:EtudiantService) { 
    this.id= this.currentroute.snapshot.params['idEtudiant'];
  }

  ngOnInit(): void {
this.getAllEquipesofEtudiant();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  getAllEquipesofEtudiant() {
    this.serviceetudiant.geEtudiantById(this.id)
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res.equipe);
          this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          alert("error while fetching the Records!!")
        }
      })
  }
  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
