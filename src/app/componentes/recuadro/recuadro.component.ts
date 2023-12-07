import { Component } from '@angular/core';

@Component({
  selector: 'app-recuadro',
  templateUrl: './recuadro.component.html',
  styleUrls: ['./recuadro.component.css']
})
export class RecuadroComponent {
  cabeceras:string[]=["Nº","Alumno"]
  datosDAM:any[]=[
    {"Nº":"1","Alumno":"Daniel Andela Lopez"},
    {"Nº":"2","Alumno":"Jose Maria Dorado Ruiz"},
    {"Nº":"3","Alumno":"Natalia Cano Lopez"}
  ]

}
