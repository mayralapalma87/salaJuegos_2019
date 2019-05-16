import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-Memente',
  templateUrl: './Memente.component.html',
  styleUrls: ['./Memente.component.css']
})
export class MementeComponent implements OnInit {
  intentos = 0;
  jugada1 = '';
  jugada2 = '';
  identificadorJ1 = '';
  identificadorJ2 = '';

  constructor() {
  this.intentos = 0;
  this.jugada1 = '';
  this.jugada2 = '';
  this.identificadorJ1 = '';
  this.identificadorJ2 = '';
  }
  memes = new Array(
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false},
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false},
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false},
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false},
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false},
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false},
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false},
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false} );

    colorCambio({ posicion, color, contenido }) {
    document.getElementById(posicion.toString()).style.backgroundColor = color;
    document.getElementById(posicion.toString()).innerHTML = contenido;
  }
  vaciar()  {
    this.jugada1 = '';
    this.jugada2 = '';
    this.identificadorJ1 = '';
    this.identificadorJ2 = '';
  }
  iniciarJuego() {
// tslint:disable-next-line: no-unused-expression
    let dato = document.getElementById('juego');
    dato.style.opacity = '1';
    this.memes.sort(function() {return Math.random() - 0.5});
    for ( let i = 0 ; i < 16 ; i++ ) {
      let meme = this.memes[i].nombre;
      let dato = document.getElementById( i.toString() );
      dato.dataset.valor = meme;
    }
  }
  resetearJuego() {
    this.memes.sort(function() {return Math.random() - 0.5});
    for ( let i = 0 ; i < 16 ; i++ ) {
      let meme = this.memes[i].nombre;
      let dato = document.getElementById( i.toString() );
      dato.dataset.valor = meme;
      this.colorCambio({ posicion: i, color: 'rgb(0, 0, 0, 0.8)', contenido: '?' });
    }
    //"<img src='../assets/imagenes/Memes/dino.jpg'>"
  }

  girarMeme() {

    var evento = window.event.target as unknown as HTMLInputElement;

    this.jugada2 = evento.dataset.valor;
    this.identificadorJ2 = evento.id;
    if ( this.jugada1 !== '' ) {
// tslint:disable-next-line: max-line-length
      if ( this.jugada1 === this.jugada2 && this.identificadorJ1 !== this.identificadorJ2 && this.memes[parseInt(this.identificadorJ2)].seleccion !== true && this.memes[parseInt(this.identificadorJ1)].seleccion !== true) {

        this.memes[parseInt(this.identificadorJ1)].seleccion = true;
        this.memes[parseInt(this.identificadorJ2)].seleccion = true;
        this.colorCambio({ posicion: this.identificadorJ2, color: '#FF5E18', contenido: this.jugada2 });
        this.vaciar();
        this.comprobar();
      } else if (this.identificadorJ1 !== this.identificadorJ2) {
        const seconds = interval(1000);
        setTimeout(() => {
          this.colorCambio({posicion: this.identificadorJ1, color: 'rgb(0, 0, 0, 0.8)', contenido: "?"})
          this.colorCambio({posicion: this.identificadorJ2, color: 'rgb(0, 0, 0, 0.8)', contenido: "?"})
          this.vaciar()
        }, 500);

        this.colorCambio({ posicion: this.identificadorJ2, color: '#FF5E18', contenido: this.jugada2 });
      }
    } else if (this.jugada2 !== 'valor') {

      this.colorCambio({ posicion: this.identificadorJ2, color: '#FF5E18', contenido: this.jugada2 });

      this.jugada1 = this.jugada2;
      this.identificadorJ1 = this.identificadorJ2;
    }
  }

  comprobar() {
    let aciertos = 0;
    for ( let i = 0 ; i < 16 ; i++ ) {
      if ( this.memes[i].seleccion === true ) {
        aciertos ++;
      }
    }
    if (aciertos === 16) {
      document.getElementById('ganaste').innerHTML = 'GANASTE';
    }
  }

  ngOnInit() {
  }

}
