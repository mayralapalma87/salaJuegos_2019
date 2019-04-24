import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-listado-de-paises',
  templateUrl: './listado-de-paises.component.html',
  styleUrls: ['./listado-de-paises.component.css']
})
export class ListadoDePaisesComponent implements OnInit {
  public listadoDePaises: Array<any>;
  miServicioDePaises: PaisesService;
  constructor( servicioPaises: PaisesService) {
    this.miServicioDePaises = servicioPaises;
   }

  ngOnInit() {
    this.miServicioDePaises.listar()
    .then(datos => {
// tslint:disable-next-line: no-console
      console.info('listado de paises', datos);
      this.listadoDePaises = datos;
    });
  }

}
