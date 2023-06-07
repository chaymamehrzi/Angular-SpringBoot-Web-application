import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
  { path: '', loadChildren: () => import('./Etudiant/etudiants/etudiants.module').then(m => m.EtudiantsModule) },
  { path: 'login', component:LoginComponent },
  { path: 'etudiants', loadChildren: () => import('./Etudiant/etudiants/etudiants.module').then(m => m.EtudiantsModule) },
  { path: 'contrats', loadChildren: () => import('./contrats/contrats.module').then(m => m.ContratsModule) },
  { path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'enseignants', loadChildren: () => import('./enseignant/enseignant.module').then(m => m.EnseignantModule) },
  { path: 'universities', loadChildren: () => import('./universities/universities.module').then(m => m.UniversitiesModule) },
  { path: 'equipes', loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule) },
  { path: 'detailequipes', loadChildren: () => import('./detailequipes/detailequipes.module').then(m => m.DetailequipesModule) },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
