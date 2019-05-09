import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Memente',
  templateUrl: './Memente.component.html',
  styleUrls: ['./Memente.component.css']
})
export class MementeComponent implements OnInit {
  constructor() { }
  memes = new Array(
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false},
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false},
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false},
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false},
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false},
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false},
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false},
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false} );

  intentos = 0;
  jugada1 = '';
  jugada2 = '';
  identificadorJ1 = '';
  identificadorJ2 = '';

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
      let carta = this.memes[i].nombre;
      let dato = document.getElementById( i.toString() );
      dato.dataset.valor = carta;
    }
  }
  resetearJuego() {
    this.memes.sort(function() {return Math.random() - 0.5});
    for ( let i = 0 ; i < 16 ; i++ ) {
      let carta = this.memes[i].nombre;
      let dato = document.getElementById( i.toString() );
      dato.dataset.valor = carta;
      this.colorCambio({ posicion: i, color: 'black', contenido: '?' });
    }
  }

  girarMeme() {
    var evento = window.event.target as unknown as HTMLInputElement;

    this.jugada2 = evento.dataset.valor;
    this.identificadorJ2 = evento.id;
    if( this.jugada1 !== '' ) {
// tslint:disable-next-line: max-line-length
      if( this.jugada1 === this.jugada2 && this.identificadorJ1 !== this.identificadorJ2 && this.memes[parseInt(this.identificadorJ2)].seleccion != true &&               this.memes[parseInt(this.identificadorJ1)].seleccion != true) {

        this.memes[parseInt(this.identificadorJ1)].seleccion = true;
        this.memes[parseInt(this.identificadorJ2)].seleccion = true;

        this.colorCambio({ posicion: this.identificadorJ2, color: 'blue', contenido: this.jugada2 });
        this.vaciar();
        this.comprobar();
      } else if(this.identificadorJ1 !== this.identificadorJ2){
        let self = this;
        setTimeout(function(){
          this.colorCambio(self.identificadorJ1, 'black', '?'),
          this.colorCambio(self.identificadorJ2, 'black', '?'),
          this.vaciar()
        },200);

        this.colorCambio({ posicion: this.identificadorJ2, color: 'blue', contenido: this.jugada2 });
      }
    } else if(this.jugada2 !== 'valor') {

      this.colorCambio({ posicion: this.identificadorJ2, color: 'blue', contenido: this.jugada2 });

      this.jugada1 = this.jugada2;
      this.identificadorJ1 = this.identificadorJ2;
    }
  }

  comprobar() {
    let aciertos = 0;
    for( let i = 0 ; i < 16 ; i++ ){
      if ( this.memes[i].seleccion === true ) {
        aciertos ++;
      }
    }
    if(aciertos === 16){
      document.getElementById('juego').innerHTML = 'GANASTE';
    }
  }

  ngOnInit() {
  }

}
