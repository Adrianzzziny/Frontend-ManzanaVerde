import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';

import { AgregarAlmuerzoComponent } from './Components/agregar-almuerzo/agregar-almuerzo.component';
import { AgregarCenaComponent } from './Components/agregar-cena/agregar-cena.component';

import { AgregarDesayunoComponent } from './Components/agregar-desayuno/agregar-desayuno.component';

import { ConsultaAlmuerzoComponent } from './Components/consulta-almuerzo/consulta-almuerzo..component';

import { ConsultaCenaComponent } from './Components/consulta-cena/consulta-cena.component';
import { ConsultaDesayunoComponent } from './Components/consulta-desayuno/consulta-desayuno.component';

import { CrudAlmuerzoComponent } from './Components/crud-almuerzo/crud-almuerzo.component';
import { CrudCenaComponent } from './Components/crud-cena/crud-cena.component';
import { CrudDesayunoComponent } from './Components/crud-desayuno/crud-desayuno.component';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    AgregarAlmuerzoComponent,
    AgregarCenaComponent,
    AgregarDesayunoComponent,
    ConsultaAlmuerzoComponent,
    ConsultaCenaComponent,
    ConsultaDesayunoComponent,
    CrudAlmuerzoComponent,
    CrudCenaComponent,
    CrudDesayunoComponent,],

    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
      AppRoutingModule
  
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }