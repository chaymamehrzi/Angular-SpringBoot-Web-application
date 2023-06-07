import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { DepartmentEtudiantComponent } from './department-etudiant/department-etudiant.component';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { EtudiantContratComponent } from './etudiant-contrat/etudiant-contrat.component';
import { EtudiantequipesComponent } from './etudiantequipes/etudiantequipes.component';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListDepComponent } from './list-dep/list-dep.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { ListetudiantbydepartmentComponent } from './listetudiantbydepartment/listetudiantbydepartment.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [{ path:'',component: EtudiantsComponent,children:[
  {path:'',component:ListEtudiantComponent},
  {path:'add',component:FormEtudiantComponent},
  {path:'update/:idEtudiant',component:FormEtudiantComponent},
  {path:'etudiantequipes/:idEtudiant',component:EtudiantequipesComponent},
  {path:'etudiant-contrat/:idEtudiant',component:EtudiantContratComponent},
  {path:'statistics/:critereage',component:StatisticsComponent},
  {path:'app-detail-etudiant/:idEtudiant',component:DetailEtudiantComponent}, 
  {path:'department-etudiant/:idEtudiant',component:DepartmentEtudiantComponent},
  {path:'listetudiantbydepartment/:etudiant.departement.idDepart',component:ListetudiantbydepartmentComponent},
  {path:'listdep/:id',component:ListDepComponent}

] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
