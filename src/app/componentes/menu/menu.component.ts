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
          this.router.navigate(['/Anagrama']);
          break;
      case 'Adivina':
          this.router.navigate(['/Adivina']);
          break;
      case 'Agilidad':
          this.router.navigate(['/Agilidad']);
          break;
      case 'AdivinaMasListado':
          this.router.navigate(['/AdivinaMasListado']);
          break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/AgilidadaMasListado']);
          break;
      case 'piedraPapelyTijeras':
          this.router.navigate(['/priedra-papel-tijeras']);
          break;
      case 'tateti':
          this.router.navigate(['/tateti']);
          break;
      case 'memente':
          this.router.navigate(['/memente']);
          break;
    }
  }

}
