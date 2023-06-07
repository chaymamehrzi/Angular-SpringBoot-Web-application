import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnseignantComponent } from './enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { ConsultEnseignantComponent } from './consult-enseignant/consult-enseignant.component';
import { EnseignantRoutingModule } from './enseignant-routing.module';
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
    EnseignantComponent,
    AddEnseignantComponent,
    ConsultEnseignantComponent
  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
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
export class EnseignantModule { }
