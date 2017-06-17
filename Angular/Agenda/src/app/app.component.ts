import { Component, OnInit } from '@angular/core';

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
  //constructor () {}

  ngOnInit()
  {
    //coleccion de contactos a pasar al hijo
    //hooh on init actualizamos datos contacto

     this.contactos = [
        'Peter Grifing',
        'Thyler Dourden',
        'Homer Simson',
         'Jack Sparrow'

     ];
  }
}
