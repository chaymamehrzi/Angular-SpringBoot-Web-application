import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-etudiant-contrat',
  templateUrl: './etudiant-contrat.component.html',
  styleUrls: ['./etudiant-contrat.component.css']
})
export class EtudiantContratComponent implements OnInit {
 id:number; 
 contratetudiant: any; 
 displayedColumns: string[] = ['dateDebutContrat', 'dateFinContrat', 'specialite', 'archive', 'montantContrat'];
 dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

  constructor(private serviceEtudiant:EtudiantService,private current:ActivatedRoute) { 
    this.id=this.current.snapshot.params['idEtudiant'];

  }

  ngOnInit(): void {
   this.getAllContratsofEtudiant();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  getAllContratsofEtudiant() {
    this.serviceEtudiant.geEtudiantById(this.id)
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res.contrat);
          this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          alert("error while fetching the Records!!")
        }
      })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
