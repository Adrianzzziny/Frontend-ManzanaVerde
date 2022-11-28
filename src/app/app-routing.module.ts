import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';


import { AgregarAlmuerzoComponent } from './Components/agregar-almuerzo/agregar-almuerzo.component';
import { AgregarCenaComponent } from './Components/agregar-cena/agregar-cena.component';

import { AgregarDesayunoComponent } from './Components/agregar-desayuno/agregar-desayuno.component';

import { ConsultaAlmuerzoComponent } from './Components/consulta-almuerzo/consulta-almuerzo..component';

import { ConsultaCenaComponent } from './Components/consulta-cena/consulta-cena.component';
import { ConsultaDesayunoComponent } from './Components/consulta-desayuno/consulta-desayuno.component';

import { CrudAlmuerzoComponent } from './Components/crud-almuerzo/crud-almuerzo.component';
import { CrudCenaComponent } from './Components/crud-cena/crud-cena.component';
import { CrudDesayunoComponent } from './Components/crud-desayuno/crud-desayuno.component';


const routes: Routes = [
    {path:"agregarAlmuerzo", component:AgregarAlmuerzoComponent },
    {path:"agregarCena", component:AgregarCenaComponent },
    {path:"agregarDesayuno", component:AgregarDesayunoComponent },
    {path:"consultaAlmuerzo", component:ConsultaAlmuerzoComponent },
    {path:"consultaCena", component:ConsultaCenaComponent },
    {path:"consultaDesayuno", component:ConsultaDesayunoComponent },
    {path:"crudAlmuerzo", component:CrudAlmuerzoComponent },
    {path:"crudCena", component:CrudCenaComponent },
    {path:"crudDesayuno", component:CrudDesayunoComponent },
    { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}