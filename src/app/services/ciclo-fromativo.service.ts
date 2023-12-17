import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CicloFromativoService {

  datosAlumnos: any[] = [
    {"Nº": "1", "Alumno": "Daniel Andela Lopez"},
    {"Nº": "2", "Alumno": "Jose Maria Dorado Ruiz"},
    {"Nº": "3", "Alumno": "Natalia Cano Lopez"}
  ]
}
