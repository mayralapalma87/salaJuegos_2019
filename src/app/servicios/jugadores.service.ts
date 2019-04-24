import { Injectable } from '@angular/core';
import { ArchivosJugadoresService } from './archivos-jugadores.service';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

constructor(public miHttp: ArchivosJugadoresService) { }

// tslint:disable-next-line: no-unused-expression
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
        (// tslint:disable-next-line: no-shadowed-variable
        data: { gano: boolean; }) => data.gano === ganador || filtro == 'todos' );
        return this.filtrado; }
      )
      .catch(errror => {console.log('error');
                        return this.filtrado;
    });
  }

}
