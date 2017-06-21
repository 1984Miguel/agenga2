import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent  {

// decoramos con input cuando queremos obtener datos del padre
  @Input() datos: string[];

  // con el decorador 'Ouput' esponemos los atributos a otros componentes 
  // decormaos atributo con EventeEmiter
  @Output() clikEnEliminar = new EventEmitter<string>();
  // para emitir datos usamos funcion emit del event emiter
  notificarEliminacion(dato: string): void{
   this.clikEnEliminar.emit(dato);
  }

  esJackPeter(contacto :string): boolean
  {
    return contacto.indexOf('Jack')> -1 ||contacto.indexOf('Peter')> -1;
  }
   esHomer(contacto :string): string
  {
    return contacto.indexOf('Homer')> -1? '62px':'14px';
  }

}
