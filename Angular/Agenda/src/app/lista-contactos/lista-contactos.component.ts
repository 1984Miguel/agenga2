import { Component, Input } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent  {

// decoramos con input cuando queremos obtener datos del padre
  @Input() datos: string[];
 

}
