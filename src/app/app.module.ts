import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './adivina-mas-listado/adivina-mas-listado.component';
import { AgiliadAritmeticaComponent } from './agiliad-aritmetica/agiliad-aritmetica.component';
import { AgiliadMasListadoComponent } from './agiliad-mas-listado/agiliad-mas-listado.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ErrorComponent } from './error/error.component';
import { InputJugadoresComponent } from './input-jugadores/input-jugadores.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JugadoresListadoComponent } from './jugadores-listado/jugadores-listado.component';
import { ListadoComponent } from './listado/listado.component';
import { ListadoDePaisesComponent } from './listado-de-paises/listado-de-paises.component';
import { ListadoDeResultadosComponent } from './listado-de-resultados/listado-de-resultados.component';
import { ListadosComponent } from './listados/listados.component';
import { LoginComponent } from './login/login.component';
import { MapaDeGoogleComponent } from './mapa-de-google/mapa-de-google.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { PrincipalComponent } from './principal/principal.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    AdivinaMasListadoComponent,
    AgiliadAritmeticaComponent,
    AgiliadMasListadoComponent,
    AnagramaComponent,
    CabeceraComponent,
    ErrorComponent,
    InputJugadoresComponent,
    JuegosComponent,
    JugadoresListadoComponent,
    ListadoComponent,
    ListadoDePaisesComponent,
    ListadoDeResultadosComponent,
    ListadosComponent,
    LoginComponent,
    MapaDeGoogleComponent,
    MenuComponent,
    MenuCardComponent,
    PrincipalComponent,
    QuienSoyComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
