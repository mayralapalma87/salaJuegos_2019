import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoAdivina } from 'src/app/clases/juego-adivina';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})

export class AdivinaComponent implements OnInit {
  constructor() {
    this.nuevoJuego = new JuegoAdivina();
    // tslint:disable-next-line: no-console
    console.info('numero Secreto:', this.nuevoJuego.numeroSecreto);
    this.ocultarVerificar = false;
  }

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes: string;
  contador: number;
  ocultarVerificar: boolean;

  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.contador = 0;
  }
  verificar() {
    this.contador++;
    this.ocultarVerificar = true;
// tslint:disable-next-line: no-console
    console.info('numero Secreto:', this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()) {

      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje('Sos un Genio!!!', true);
      this.nuevoJuego.numeroSecreto = 0;

    } else {

      let mensaje: string;
      switch (this.contador) {
        case 1:
          mensaje = 'No, intento fallido, animo';
          break;
          case 2:
          mensaje = 'No,Te estaras Acercando???';
          break;
          case 3:
          mensaje = 'No es, Yo crei que la tercera era la vencida.';
          break;
          case 4:
          mensaje = 'No era el  ' + this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje = ' intentos y nada.';
          break;
          case 6:
          mensaje = 'Afortunado en el amor';
          break;

        default:
            mensaje = 'Ya le erraste ' + this.contador + ' veces';
            break;
      }
      this.MostarMensaje('#' + this.contador + ' ' + mensaje + ' ayuda :' + this.nuevoJuego.retornarAyuda());


    }
// tslint:disable-next-line: no-console
    console.info('numero Secreto:', this.nuevoJuego.gano);
  }

  MostarMensaje(mensaje: string= 'este es el mensaje', ganador: boolean= false) {
    this.Mensajes = mensaje;
    var x = document.getElementById('snackbar');
    if (ganador) {
        x.className = 'show Ganador';
      } else {
        x.className = 'show Perdedor';
      }
    var modelo = this;
// tslint:disable-next-line: only-arrow-functions
    setTimeout(function() {
      x.className = x.className.replace('show', '');
      modelo.ocultarVerificar = false;
     }, 3000);
// tslint:disable-next-line: no-console
    console.info('objeto', x);

  }
  ngOnInit() {
  }
}
