import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ConsultDepartmentComponent } from './consult-department/consult-department.component';
import { DepartmentsComponent } from './departments.component';

const routes: Routes = [{ path: '', component: DepartmentsComponent,children:[
  {path:'',component:DepartmentsComponent},
  {path:'consult-department',component:ConsultDepartmentComponent},
  {path:'add-department',component:AddDepartmentComponent}
] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
