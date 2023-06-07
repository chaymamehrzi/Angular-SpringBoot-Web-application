import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { ArchivestatsComponent } from './contrats/archivestats/archivestats.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './core/services/auth.Interceptor';
import { DatePipe } from '@angular/common';
const appRoute: Routes = [
  { path: 'app-archivestats', component: ArchivestatsComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoute),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }