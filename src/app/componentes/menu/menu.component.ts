import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
          break;
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
          break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
          break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
          break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
          break;
      case 'PriedraPapelTijeras':
          this.router.navigate(['/Juegos/PriedraPapelTijeras']);
          break;
      case 'Tateti':
          this.router.navigate(['/Juegos/Tateti']);
          break;
      case 'Memente':
          this.router.navigate(['/Juegos/Memente']);
          break;
    }
  }

}
