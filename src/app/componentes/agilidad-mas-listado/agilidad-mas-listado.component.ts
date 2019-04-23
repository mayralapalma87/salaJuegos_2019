import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/clases/juego';

Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
});
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>();}

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego) {
    this.listadoParaCompartir.push(juego);
// tslint:disable-next-line: no-console
    console.info('en app', this.listadoParaCompartir);
  }
}
