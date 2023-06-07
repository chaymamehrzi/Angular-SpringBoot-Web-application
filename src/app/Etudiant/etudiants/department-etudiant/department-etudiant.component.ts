import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from 'hammerjs';
import { Department } from 'src/app/core/model/department';
import { etudiants } from 'src/app/core/model/etudiants';
import { DepartmentsService } from 'src/app/core/services/departments.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AnyARecord } from 'dns';
import { LoginService } from 'src/app/core/services/login.service';
@Component({
  selector: 'app-department-etudiant',
  templateUrl: './department-etudiant.component.html',
  styleUrls: ['./department-etudiant.component.css']
})
export class DepartmentEtudiantComponent implements OnInit {
 id :number; 
 etudiant: etudiants; 
role:String;
  constructor(private etudserv :EtudiantService ,private current :ActivatedRoute,private loginserv:LoginService) {
  this.role=this.loginserv.getUserRole();
    this.id=this.current.snapshot.params['idEtudiant'];

  }

  ngOnInit(): void {
      this.getDepartmentEtudiant();
    }

  
      
    getDepartmentEtudiant() {
      this.etudserv.geEtudiantById(this.id)
        .subscribe((res)=>{
        this.etudiant = res;
        })
    }


    }
 
