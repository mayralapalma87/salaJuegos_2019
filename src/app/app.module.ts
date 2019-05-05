import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatRippleModule} from '@angular/material';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule} from '@angular/common';

// Services
import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { PaisesService } from './servicios/paises.service';
import { JugadoresService } from './servicios/jugadores.service';
import { ArchivosJugadoresService} from './servicios/archivos-jugadores.service';
import { RuteandoModule } from './ruteando/ruteando.module';
import { JuegoServiceService } from './servicios/juego-service.service';

// Components
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { AgmCoreModule } from '@agm/core';
import { SexoPipe } from './pipes/sexo.pipe';
import { PriedraPapelTijerasComponent } from './componentes/priedra-papel-tijeras/priedra-papel-tijeras.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { MementeComponent } from './componentes/Memente/Memente.component';

@NgModule({
   declarations: [
      AppComponent,
      AdivinaElNumeroComponent,
      AdivinaMasListadoComponent,
      CabeceraComponent,
      ErrorComponent,
      InputJugadoresComponent,
      JuegosComponent,
      JugadoresListadoComponent,
      ListadoComponent,
      ListadoDePaisesComponent,
      ListadoDeResultadosComponent,
      LoginComponent,
      MapaDeGoogleComponent,
      MenuComponent,
      MenuCardComponent,
      PrincipalComponent,
      QuienSoyComponent,
      RegistroComponent,
      AgilidadAritmeticaComponent,
      AgilidadMasListadoComponent,
      RegistroComponent,
      MenuCardComponent,
      CabeceraComponent,
      QuienSoyComponent,
      ListadoDePaisesComponent,
      MapaDeGoogleComponent,
      JugadoresListadoComponent,
      InputJugadoresComponent,
      PriedraPapelTijerasComponent,
      TatetiComponent,
      AnagramaComponent,
      MementeComponent,
      SexoPipe
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      RuteandoModule,
      HttpClientModule,
      AccordionModule.forRoot(),
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      MatButtonModule,
      MatCheckboxModule,
      MatRippleModule,
      CommonModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
      })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [ JuegoServiceService, MiHttpService, PaisesService, ArchivosJugadoresService, JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
