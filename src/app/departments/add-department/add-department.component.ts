import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core/model/department';
import { DepartmentsService } from 'src/app/core/services/departments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  name : string
  constructor(private departentService : DepartmentsService) { }
  department : Department = new Department();
  ngOnInit(): void {

  }
  onSubmit(){
    console.log("je suiis la")
/*
    this.department= new Department();
    this.department.nomDepart = this.name;*/
    this.departentService.addDepartment({"nomDepart":this.department.nomDepart}).subscribe(
      data =>{
      console.log(data)
    })
  }
}
