import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import {ContactosService} from './contactos.service';

@NgModule({
  //Componentes directivas y pipes de mi aplicacion
  declarations: [
    AppComponent,
    ListaContactosComponent
  ],
  // modulos de los que dependemos
  imports: [
    BrowserModule
  ],

  // indicamos los proveedores de aquellas piezas que sean susceptibles
  //de ser inyectadas como dependencias
  providers: [
    ContactosService
  ],

  //indicamos componente raiz primero que se instanciara
  bootstrap: [AppComponent]
})
export class AppModule { }
