import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/****************************** COMPONENTES PROPIOS ****************************** */
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [ 
  { 
    path: '', 
    component: PagesComponent,
    children: [
        { path: 'account-settings', component: AccountSettingsComponent, data: { title : 'Configuraciones de cuenta'} },
        { path: 'dashboard', component: DashboardComponent, data: { title : 'Dashboard'} },
        { path: 'grafica1', component: Grafica1Component, data: { title : 'Grafica1'} },
        { path: 'progress', component: ProgressComponent, data: { title : 'Ajustes de cuenta'} },
        { path: 'promesas', component: PromesasComponent, data: { title : 'Promesas'} },
        { path: 'rxjs', component: RxjsComponent, data: { title : 'Rxjs'} },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
