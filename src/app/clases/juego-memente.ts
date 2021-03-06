import { Juego } from './juego';

export class JuegoMemente extends  Juego {
  numeroSecreto = 0;
  numeroIngresado = 0;
  constructor(nombre?: string, gano?: boolean, jugador?: string) {
      super('Adivina el número', gano, jugador);
    }
  public verificar() {
      if (this.numeroIngresado === this.numeroSecreto) {
        this.gano = true;
      }
      if (this.gano) {
        return true;
      } else {
        return false;
      }
   }
   public generarnumero() {
      this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
      // tslint:disable-next-line: no-console
      console.info('numero Secreto:' + this.numeroSecreto);
      this.gano = false;
    }
    public retornarAyuda() {
      if (this.numeroIngresado < this.numeroSecreto) {
        return 'Falta';
      }
      return 'Te pasate';
    }
}
