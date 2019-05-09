import { Component, OnInit } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave = '';
  progreso: number;
  progresoMensaje = 'esperando...';
  logeando = true;
  ProgresoDeAncho: string;

  clase = 'progress-bar progress-bar-info progress-bar-striped ';

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) {
      this.progreso = 0;
      this.ProgresoDeAncho = '0%';
  }

ngOnInit() {
}
Entrar() {
  if (this.usuario === 'admin' && this.clave === 'admin') {
    this.router.navigate(['/Principal']);
  } else {
       // tslint:disable-next-line: deprecation
       event.preventDefault(); // Avoid default action for the submit button of the login form

      // Calls service to login user to the api rest
       this.loginService.login(this.usuario, this.clave).subscribe(
        res => {
         console.log(res);
        },
        error => {
          console.error(error);
        },
        () => this.router.navigateByUrl('/Principal')
      );
    }
}
volverAlHome() {
    this.router.navigate(['/Principal']);
}
MoverBarraDeProgreso() {
    this.logeando = false;
    this.clase = 'progress-bar progress-bar-danger progress-bar-striped active';
    this.progresoMensaje = 'NSA spy...';
// tslint:disable-next-line: no-shadowed-variable
    const timer = Observable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log('inicio');
      this.progreso = this.progreso + 1;
      this.ProgresoDeAncho = this.progreso + 20 + '%';
      switch (this.progreso) {
        case 15:
        this.clase = 'progress-bar progress-bar-warning progress-bar-striped active';
        this.progresoMensaje = 'Verificando ADN...';
        break;
        case 30:
          this.clase = 'progress-bar progress-bar-Info progress-bar-striped active';
          this.progresoMensaje = 'Adjustando encriptación..';
          break;
          case 40:
          this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
          this.progresoMensaje = 'Recompilando Info del dispositivo..';
          break;
          case 50:
          this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
          this.progresoMensaje = 'Borrando disco C..';
          break;
          case 55:
          this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
          this.progresoMensaje = 'Era mentira pero te asustaste..';
          break;
          case 75:
          this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
          this.progresoMensaje = 'Recompilando claves facebook, gmail, chats..';
          break;
          case 85:
          this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
          this.progresoMensaje = 'Instalando KeyLogger..';
          break;
        case 100:
          console.log('final');
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }
    });
  }
}
