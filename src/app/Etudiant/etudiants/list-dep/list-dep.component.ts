import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/core/model/department';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-list-dep',
  templateUrl: './list-dep.component.html',
  styleUrls: ['./list-dep.component.css']
})
export class ListDepComponent implements OnInit {
 departments: Department[]; 
 idstudent: number;
 displayedColumns: string[] = ['idDepart','nomDepart', 'Action'];
 dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
  constructor( private depserv:EtudiantService,private route :ActivatedRoute,private routeme:Router) {
    this.idstudent=this.route.snapshot.params['id'];

   }

  ngOnInit(): void {
   this.getAllDepartment();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  getAllDepartment(){


    this.depserv.getDepartments()
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
  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  affectethisdeptostudent(iddep:number){
    console.log(iddep,this.idstudent);
    this.depserv.affecterEtudiantToDepartment(iddep,this.idstudent).subscribe(()=>{
      console.log("done");
      this.routeme.navigate(['/etudiants/department-etudiant',this.idstudent]);
    })
  }

}
