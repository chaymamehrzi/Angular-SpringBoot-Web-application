import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailequipesRoutingModule } from './detailequipes-routing.module';
import { DetailequipesComponent } from './detailequipes.component';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule ,FormControl} from '@angular/forms';
import { FormDetailequipesComponent } from './form-detailequipes/form-detailequipes.component';
import { ListDetailequipesComponent } from './list-detailequipes/list-detailequipes.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';



@NgModule({
  declarations: [
    DetailequipesComponent,
    FormDetailequipesComponent,
    ListDetailequipesComponent,
    UpdateDetailsComponent
  
  ],
  imports: [
    CommonModule,
    DetailequipesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    ReactiveFormsModule

  ]
})
export class DetailequipesModule { }
