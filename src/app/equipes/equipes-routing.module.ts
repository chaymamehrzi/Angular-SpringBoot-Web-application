import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar.chart.component';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { EquipesComponent } from './equipes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { FormStadeComponent } from './form-stade/form-stade.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { ListStadeComponent } from './list-stade/list-stade.component';
import { NavEquipeComponent } from './nav-equipe/nav-equipe.component';

const routes: Routes = [
  { path:'', component: EquipesComponent , children : [
  {path:'',component:NavEquipeComponent},
  {path:'add',component:FormEquipeComponent},
  {path:'stat',component:BarChartComponent},
  {path:'stade',component:FormStadeComponent},
  {path:'listStatds',component:ListStadeComponent},
  {path:'favorites',component:FavoriteComponent},
  {path:'update/:id',component:FormEquipeComponent}]}]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
