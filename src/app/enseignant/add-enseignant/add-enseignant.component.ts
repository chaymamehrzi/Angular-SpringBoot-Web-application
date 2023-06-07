import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core/model/department';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { DepartmentsService } from 'src/app/core/services/departments.service';
import { EnseignantService } from 'src/app/core/services/enseignant.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {
  enseignant : Enseignant;
  departments : Department[];
  constructor(private departmentService: DepartmentsService ,private enseignanService : EnseignantService) { }

  ngOnInit(): void {
    this.enseignant = new Enseignant();
    this.departmentService.getDepartments().subscribe(
      data=>{
        this.departments =data;
      }
    )
  }
  onSubmit(){
    console.log(this.enseignant)

     this.enseignanService.addEnseignant(this.enseignant).subscribe(
      data =>{
      console.log(data)
    })

  }
}
