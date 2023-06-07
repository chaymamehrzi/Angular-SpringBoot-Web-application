import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { NavEtudiantComponent } from './nav-etudiant/nav-etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantequipesComponent } from './etudiantequipes/etudiantequipes.component';
import { EtudiantContratComponent } from './etudiant-contrat/etudiant-contrat.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StatisticsComponent } from './statistics/statistics.component';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { ItemEtudiantComponent } from './item-etudiant/item-etudiant.component';
import { DepartmentEtudiantComponent } from './department-etudiant/department-etudiant.component';
import { ListetudiantbydepartmentComponent } from './listetudiantbydepartment/listetudiantbydepartment.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ListDepComponent } from './list-dep/list-dep.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [
    EtudiantsComponent,
    ListEtudiantComponent,
    NavEtudiantComponent,
    FormEtudiantComponent,
    EtudiantequipesComponent,
    EtudiantContratComponent,
    StatisticsComponent,
    DetailEtudiantComponent,
    ItemEtudiantComponent,
    DepartmentEtudiantComponent,
    ListetudiantbydepartmentComponent,
    ListDepComponent,NavEtudiantComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    EtudiantsRoutingModule,
    Ng2SearchPipeModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    NgChartsModule,
    MatDialogModule,
    MatGridListModule

    
    
    

  ]
})
export class EtudiantsModule { }