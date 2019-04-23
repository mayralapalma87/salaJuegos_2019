import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  constructor(public http: HttpClient) { }

  public httpGetPromise(url: string, objeto: any) {
    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }

  private extraerDatos(resp: Response) {

      return resp.json() || {};

  }
  private handleError(error: Response | any) {

      return error;
  }

}
