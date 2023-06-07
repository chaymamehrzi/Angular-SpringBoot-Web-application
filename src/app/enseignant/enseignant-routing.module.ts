import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { ConsultEnseignantComponent } from './consult-enseignant/consult-enseignant.component';
import { EnseignantComponent } from './enseignant.component';

const routes: Routes = [{ path: '', component: EnseignantComponent,children:[
  {path:'',component:EnseignantComponent},
  {path:'consult-enseignant',component:ConsultEnseignantComponent},
  {path:'add-enseignant',component:AddEnseignantComponent}
] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
