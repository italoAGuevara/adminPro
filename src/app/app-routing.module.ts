import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages-routing.module';

import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes : Routes =[
  /************************************************************ */
  /*  Estas son las rutas que ya estan tomadas                  */
  /*                                                            */
  /*    path: '/dashboard' PagesRouting                         */
  /*    path: '/auth'AuthRouting                                */
  /*    path: '/medicos' MedicosRouting                         */
  /*    path: '/compras' ComprasRouting                         */
  /************************************************************ */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),

    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
