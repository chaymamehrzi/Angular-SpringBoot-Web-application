import { Component, OnInit ,ViewChild} from '@angular/core';
import { Department } from 'src/app/core/model/department';
import { DepartmentsService } from 'src/app/core/services/departments.service';
import { PrimeNGConfig } from 'primeng/api';
import { EnseignantService } from 'src/app/core/services/enseignant.service';
import { Enseignant } from 'src/app/core/model/Enseignant';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-consult-department',
  templateUrl: './consult-department.component.html',
  styleUrls: ['./consult-department.component.css']
})
export class ConsultDepartmentComponent implements OnInit {
  closeResult: string = '';
  displayBasic: boolean = false;
  displayBasic1 :boolean = false;
  displayDep :boolean = false;
  dep : Department ;
  public listDepartments :Department[];
  listEnseignant : Enseignant[];
  loading: boolean = true;
  cols : any []
  hoveView = false;
  hoveEdit = false ;
  hovDelete = false;
  @ViewChild('dt') table: Table;

  /*,private modalService: NgbModal*/
  constructor(private departmentService : DepartmentsService,private primengConfig: PrimeNGConfig,private enseignantService : EnseignantService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'Department ID', header: 'Department ID' },
      { field: 'Department Name', header: 'Department Name' },
  ];
    this.dep = new Department();
    this.primengConfig.ripple = true;

    this.departmentService.getDepartments().subscribe(
      data =>{
      this.listDepartments=data;
      this.loading = false;

    })
  }
  onDelete(item : Department){
    this.departmentService.deleteDepartment(item.idDepart).subscribe(
      data =>{
      console.log(data)
      this.listDepartments.splice(this.findIndexById(item.idDepart));
    })
  }
  openDepartment(){
    this.displayDep = true;
    this.dep = new Department();

  }
  addDepartment(){
    this.displayDep = false;
    this.departmentService.addDepartment({"nomDepart":this.dep.nomDepart}).subscribe(
      data =>{
      console.log(data)
      this.listDepartments.push(data);
    })
  }

  showBasicDialog(item :any) {
    this.displayBasic = true;
    this.departmentService.geDepartmentById(item.idDepart).subscribe(
      data =>{
        this.dep =data
      console.log(data)
    })
}

onOpen(item :Department){
  this.displayBasic1 = true;
  this.departmentService.getEnseignantsByDepartment(item.idDepart).subscribe(data=>{
    this.listEnseignant = data;
  })
}

cancel(){
  this.displayBasic1  = false
}

updateDepartment(dep : any){
  console.log(dep)
  this.departmentService.updateDepartment(dep.idDepart,dep).subscribe(
    data =>{
      this.dep =data
    console.log(data)
  })
  this.ngOnInit

  this.listDepartments[this.findIndexById(this.dep.idDepart)] = this.dep;
  console.log(this.listDepartments)
  this.displayBasic = false;

}
findIndexById(id: number): number {
  let index = -1;
  for (let i = 0; i < this.listDepartments.length; i++) {
      if (this.listDepartments[i].idDepart === id) {
          index = i;
          break;
      }
  }

  return index;
}
applyFilterGlobal(event :any , stringVal:any) {
  console.log((event.target as HTMLInputElement).value)

  this.table.filterGlobal((event.target as HTMLInputElement).value, stringVal);
}
filterGlobal(event : any , ch : any){
  console.log(event.target.value)
  this.table.filterGlobal(event.target.value,'contains');

}
}
