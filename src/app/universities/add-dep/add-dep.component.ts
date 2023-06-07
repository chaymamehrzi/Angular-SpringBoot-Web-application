import { Component, OnInit } from '@angular/core';
import {depUniv} from "../../core/model/depUniv";
import {UniversiteService} from "../../core/services/universite.service";
import {Router} from "@angular/router";
import {DepartmentsService} from "../../core/services/departments.service";

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {
  public depUniv: depUniv;
  public listuniversite: any;
  public listDepartments: any;

  constructor(private router: Router,
              private universiteService: UniversiteService,
              private departmentsService: DepartmentsService) {
  }

  ngOnInit(): void {
    this.depUniv = new depUniv();
    this.getListOfDepAndUniv();
  }

  saveDep() {
    if (this.depUniv.iddep && this.depUniv.iduniv) {
      this.universiteService.addDep(this.depUniv.iddep, this.depUniv.iduniv).subscribe(
        data => {
          this.router.navigate(['universities/']);
        })
    }
  }

  private getListOfDepAndUniv() {
    this.universiteService.getlistuniversities().subscribe(
      data =>{
        this.listuniversite=data;
      })
    this.departmentsService.getDepartments().subscribe(
      data =>{
        this.listDepartments=data;
      })
  }
}
