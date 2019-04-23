import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
  }
   tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
   // console.info("en app",this.listadoParaCompartir);
  }

}
