import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { NavEquipeComponent } from './nav-equipe/nav-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { FormsModule } from '@angular/forms';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import * as CanvasJSAngularChart from '../../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

import { BarChartComponent } from './bar-chart/bar.chart.component';
import { MultiSeriesBarChartComponent } from './bar-chart/multiseries.bar.chart.component';
import { StackedBarChartComponent } from './bar-chart/stacked.bar.chart.component';
import { StackedBar100ChartComponent } from './bar-chart/stacked.bar100.chart.component';
import { StackedBar100ChartIndexlabelComponent } from './bar-chart/stacked.bar100.chart.indexlabel.component';
import {MatIconModule} from '@angular/material/icon';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormStadeComponent } from './form-stade/form-stade.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListStadeComponent } from './list-stade/list-stade.component';

@NgModule({
  declarations: [
    EquipesComponent,
    ListEquipeComponent,
    NavEquipeComponent,
    FormEquipeComponent,
    DetailEquipeComponent,
    CanvasJSChart,
    BarChartComponent,
    MultiSeriesBarChartComponent,
    StackedBarChartComponent,
    StackedBar100ChartComponent,
    StackedBar100ChartIndexlabelComponent,
    FavoriteComponent,
    FormStadeComponent,
    ListStadeComponent,
    

  ],
  imports: [
    CommonModule,
    EquipesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  

  ],
  providers: []
  
})
export class EquipesModule { }
