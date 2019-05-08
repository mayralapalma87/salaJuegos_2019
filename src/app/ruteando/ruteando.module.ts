import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { ListadoComponent } from '../componentes/listado/listado.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component';
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component';
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component';
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { TatetiComponent } from '../componentes/tateti/tateti.component';
import { MementeComponent } from '../componentes/Memente/Memente.component';
import { PriedraPapelTijerasComponent } from '../componentes/PriedraPapelTijeras/PriedraPapelTijeras.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AdivinaComponent } from '../componentes/adivina/adivina.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Jugadores' , component: JugadoresListadoComponent},
{path: '' , component: PrincipalComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Mapa' , component: MapaDeGoogleComponent},
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'Registro' , component: RegistroComponent},
{path: 'Principal' , component: PrincipalComponent},
{path: 'Listado' , component: ListadoComponent},
{path: 'Paises' , component: ListadoDePaisesComponent},
{path: 'Adivina' , component: AdivinaComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Anagrama' , component: AnagramaComponent},
{path: 'PriedraPapelTijeras' , component: PriedraPapelTijerasComponent},
{path: 'Tateti' , component: TatetiComponent},
{path: 'Memente' , component: MementeComponent},
{path: 'Juegos' , component: JuegosComponent },
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
