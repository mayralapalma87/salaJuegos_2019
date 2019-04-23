import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  constructor(public miHttp: MiHttpService ) { }

  public listar(): Promise<Array<any>> {
       return   this.miHttp.httpGetP('https://restcountries.eu/rest/v2/all')
          .then( data => {
            console.log( data );
            return data;
          })
          .catch( err => {
            console.log( err );
            return null;
          });
    }
}
