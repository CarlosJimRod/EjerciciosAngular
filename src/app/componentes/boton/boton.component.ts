import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {

  @Output() click = new EventEmitter

  onClick() {
    this.click.emit();
  }

}
