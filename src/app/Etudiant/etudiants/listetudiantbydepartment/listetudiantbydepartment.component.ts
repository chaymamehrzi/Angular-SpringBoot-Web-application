import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-listetudiantbydepartment',
  templateUrl: './listetudiantbydepartment.component.html',
  styleUrls: ['./listetudiantbydepartment.component.css']
})
export class ListetudiantbydepartmentComponent implements OnInit {
 iddep:number;
  e:etudiants[] ;
  displayedColumns: string[] = ['idEtudiant', 'nomE','prenomE','date_naissance','picture'];
 dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
  constructor(private etudserv:EtudiantService,private current:ActivatedRoute) { 
    this.iddep=this.current.snapshot.params['etudiant.departement.idDepart'];

  }

  ngOnInit(): void {
   this.getEtudiantsbyDepartment();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
           
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEtudiantsbyDepartment(){
    this.etudserv.getEtudiantByDepartment(this.iddep)
    .subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        alert("error while fetching the Records!!")
      }
    })

   
  }


 

}
