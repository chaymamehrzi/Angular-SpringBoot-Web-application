import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratsComponent } from './contrats.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [{
  path: '', component: ContratsComponent, children: [
    { path: 'AddContrat', component: DialogComponent }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratsRoutingModule { }
