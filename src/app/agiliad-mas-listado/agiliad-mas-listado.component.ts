import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agiliad-mas-listado',
  templateUrl: './agiliad-mas-listado.component.html',
  styleUrls: ['./agiliad-mas-listado.component.css']
})
export class AgiliadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
    console.info("en app",this.listadoParaCompartir);
  }
}
