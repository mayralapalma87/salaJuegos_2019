import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {
  constructor( public http: HttpClient ) { }

  public httpGetP( url: string) {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any ) {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpGetO( url: string): Observable<Response> {
    return this.http.get( url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData( res: Response ) {
    return res.json() || {};
  }

  private handleError( error: Response | any ) {
    return error;
  }
}
