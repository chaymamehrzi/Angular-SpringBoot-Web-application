import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsComponent } from './contrats.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ExportContratComponent } from './export-contrat/export-contrat.component';
import { NgChartsModule } from 'ng2-charts';
import { ArchivestatsComponent } from './archivestats/archivestats.component';




@NgModule({
  declarations: [
    ContratsComponent,
    DialogComponent,
    DrawerComponent,
    CardComponent,
    ExportContratComponent,
    ArchivestatsComponent
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    NgChartsModule

  ]
})
export class ContratsModule { }
