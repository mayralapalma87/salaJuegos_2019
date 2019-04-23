import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agiliad-aritmetica',
  templateUrl: './agiliad-aritmetica.component.html',
  styleUrls: ['./agiliad-aritmetica.component.css']
})
export class AgiliadAritmeticaComponent implements OnInit {
  @Output()
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=5;
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");
  }
  NuevoJuego() {
    this.ocultarVerificar=false;
   this.repetidor = setInterval(()=>{

      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);

  }
  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);



  }

}
