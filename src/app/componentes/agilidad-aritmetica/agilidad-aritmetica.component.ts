import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from 'src/app/clases/juego-agilidad';
import { Subscription } from 'rxjs';

Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
});

export class AgilidadAritmeticaComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  private subscription: Subscription;
  ngOnInit() {
  }
  constructor() {
     this.ocultarVerificar = true;
     this.Tiempo = 5;
     this.nuevoJuego = new JuegoAgilidad();
// tslint:disable-next-line: no-console
     console.info('Inicio agilidad');
  }
  NuevoJuego() {
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      console.log('llego', this.Tiempo);
// tslint:disable-next-line: triple-equals
      if (this.Tiempo == 0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
      }
      }, 900);
  }
  verificar() {
    this.ocultarVerificar = false;
    clearInterval(this.repetidor);
  }

}
