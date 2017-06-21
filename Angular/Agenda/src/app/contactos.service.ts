import { Injectable } from '@angular/core';

// es un servicio inyectable
// no secesita ningun metadato- es importantes que no
// nos olvidemos añadir el servicio en la colecion providers
// del modulo de nuestra aplicacion

@Injectable()
export class ContactosService {

     private _contactos:string[];
     
     constructor(){
       this._contactos = [
        'Peter Grifing',
        'Thyler Dourden',
        'Homer Simpson',
         'Jack Sparrow'

     ];
     }
 
 obtenerContactos(): string[] {
  return this._contactos;
 }

eliminarContacto(contacto: string):void{
  let posicion = this._contactos.indexOf(contacto);
  this._contactos.splice(posicion,1);
  //this.contactos=this.contactos.filter((c:string): boolean =>{
  //    return c !== contacto;

}

}
