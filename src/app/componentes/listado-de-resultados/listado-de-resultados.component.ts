import { Component, OnInit, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  @Input()
  listado: Array<any>;


   constructor() {
    }

   ngOnInit() {

   }

   ver() {
// tslint:disable-next-line: no-console
     console.info(this.listado);
   }

 }
