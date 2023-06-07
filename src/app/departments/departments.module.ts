import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ConsultDepartmentComponent } from './consult-department/consult-department.component';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';

import {TreeTableModule} from 'primeng/treetable';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  declarations: [
    DepartmentsComponent,
    AddDepartmentComponent,
    ConsultDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    TreeTableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    MultiSelectModule,
    InputTextModule,
    ContextMenuModule,
    TableModule



  ]
})
export class DepartmentsModule { }
