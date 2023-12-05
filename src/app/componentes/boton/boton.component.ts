import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Output() clicEnBoton = new EventEmitter();
  @Input()label = "";
  onClick(){
    this.clicEnBoton.emit()
  }
}
