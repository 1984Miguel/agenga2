import { Component, OnInit } from '@angular/core';
import {ContactosService} from "./contactos.service";

@Component({
  //indicamos el elemento html donde se instanciara este componente
  selector: 'app-root',
  // indicamos la ruta al template del componente
  // podemos escribirla inline en la propiedad temp1late
  // template: "<h1> hola </h>"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app de Miguel';

//coleccion de contactos a pasar al hijo
  contactos: string[] ;
  

  //para hacer una ina inyeccion de dependencias necesitamos
  //hacerlo en el constructor de la clase tenemos que indicar un
  //paramertro con modificador de acceso. Ademas
  //tenemos que anotar su tipo, que no es otro que el servicio a 
  //intectar
  constructor(private _contactosService: ContactosService) {}

  ngOnInit()
  {
    this.contactos= this._contactosService.obtenerContactos();
  }

eliminarContacto(contacto: string):void{
  this._contactosService.eliminarContacto(contacto);
  this.contactos=  this._contactosService.obtenerContactos();
 

}
  
}
