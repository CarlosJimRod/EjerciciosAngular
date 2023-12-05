import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoBoton="Mostrar/Ocultar";
  contenido = [["PRIMERO", "SEGUNDO"], ["TERCERO", "CUARTO"]]
  mostrarOcultar (celda:string){
    let miParrafo = document.getElementById(celda)
    if (miParrafo!!.style.display == 'none'){
      miParrafo!!.style.display = 'block'
    }else{
      miParrafo!!.style.display = 'none'
    }
  }
}
