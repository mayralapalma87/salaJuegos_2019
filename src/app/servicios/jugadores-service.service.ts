import { Injectable } from '@angular/core';
import { ArchivosJugadoresService } from './archivos-jugadores.service';

@Injectable({
  providedIn: 'root'
})
export class JugadoresServiceService {

  // peticion:any;
  constructor( public miHttp: ArchivosJugadoresService ) {
    // this.peticion = this.miHttp.traerJugadores();
    // this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
   }


 filtrado: any;

   traertodos(ruta: string, filtro: string) {
     return this.miHttp.traerJugadores(ruta).then(data => {
// tslint:disable-next-line: no-console
       console.info('jugadores service', data);

       this.filtrado = data;

       let  ganador: boolean;
// tslint:disable-next-line: triple-equals
       if (filtro == 'ganadores') {
         ganador = true;
       } else {
         ganador = false;
       }

       this.filtrado = this.filtrado.filter(
// tslint:disable-next-line: no-shadowed-variable
// tslint:disable-next-line: triple-equals
         data => data.gano === ganador  || filtro == 'todos' ); return this.filtrado; }
       )
       .catch(errror => {console.log('error');

                         return this.filtrado;


     });
   }

 }
