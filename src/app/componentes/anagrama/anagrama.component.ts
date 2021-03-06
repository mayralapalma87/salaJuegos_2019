import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  public palabras = [
                      'adan',
                      'nada',
                      'altisonancia',
                      'nacionalista',
                      'alvaro',
                      'valora',
                      'ambrosia',
                      'arabismo',
                      'amor',
                      'omar',
                      'amar',
                      'rama',
                      'anemografica',
                      'mecanografica',
                      'animal',
                      'lamina',
                      'animar',
                      'marina',
                      'astringencia',
                      'transigencia',
                      'brasil',
                      'silbar',
                      'calvo',
                      'clavo',
                      'camison',
                      'mocasin',
                      'canarios',
                      'saciaron',
                      'caras',
                      'rasca',
                      'cardiografia',
                      'radiografica',
                      'carla',
                      'calar',
                      'caro',
                      'roca',
                      'casarias',
                      'sacarias',
                      'cero',
                      'ocre',
                      'certificable',
                      'rectificable',
                      'certificacion',
                      'rectificacion',
                      'certificador',
                      'rectificador',
                      'como',
                      'moco',
                      'conservacion',
                      'conversacion',
                      'contraposicion',
                      'pronosticacion',
                      'conversadora',
                      'conservadora',
                      'cosa',
                      'saco',
                      'cronista',
                      'cortinas',
                      'delira',
                      'lidera',
                      'demostracion',
                      'domesticaron',
                      'desamparador',
                      'desparramado',
                      'deudora',
                      'Eduardo',
                      'domesticaron',
                      'adoctrinemos',
                      'donaste',
                      'tensado',
                      'Ecuador',
                      'acuerdo',
                      'Enfriamiento',
                      'refinamiento',
                      'Enlodar',
                      'Leandro',
                      'Enrique',
                      'quieren',
                      'Ernesto',
                      'noreste',
                      'Enteros',
                      'estreno',
                      'escalonamiento',
                      'ocasionalmente',
                      'estimas',
                      'sistemas',
                      'estreno',
                      'tenores',
                      'eva',
                      'ave',
                      'Florencia',
                      'necrofila',
                      'Fresa',
                      'frase',
                      'granada',
                      'agranda',
                      'generacion',
                      'encogerian',
                      'imperdonable',
                      'imponderable',
                      'inglaterra',
                      'integrarla',
                      'ironicamente',
                      'renacimiento',
                      'ligando',
                      'galindo',
                      'lucia',
                      'licúa',
                      'marcela',
                      'reclama',
                      'mariano',
                      'armonia',
                      'marino',
                      'Romina',
                      'marta',
                      'matar',
                      'materialismo',
                      'memorialista',
                      'micaela',
                      'camelia',
                      'milanesa',
                      'animales',
                      'mirona',
                      'morian',
                      'monica',
                      'camino',
                      'moro',
                      'romo',
                      'nacionalista',
                      'altisonancia',
                      'narciso',
                      'cornisa',
                      'nepal',
                      'panel',
                      'nicolas',
                      'colinas',
                      'noreste',
                      'enteros',
                      'oscar',
                      'rocas',
                      'oviedo',
                      'ovoide',
                      'paramo',
                      'amparo',
                      'paolas',
                      'solapa',
                      'paris',
                      'prisa',
                      'pedro',
                      'poder',
                      'pleno',
                      'polen',
                      'praga',
                      'pagar',
                      'quieren',
                      'enrique',
                      'radiografica',
                      'cardiografia',
                      'ramon',
                      'norma',
                      'rima',
                      'mira',
                      'roma',
                      'mora',
                      'rosal',
                      'solar',
                      'sentido',
                      'destino',
                      'sentado',
                      'donaste',
                      'sergio',
                      'riesgo',
                      'silbido',
                      'libidos',
                      'solar',
                      'rolas',
                      'soplan',
                      'planos',
                      'superposicion',
                      'presuposicion',
                      'susana',
                      'saunas',
                      'teresa',
                      'aretes',
                      'tinieblas',
                      'sibilante',
                      'trama',
                      'marta',
                      'trata',
                      'tarta',
                      'ventilan',
                      'valentin',
                      'zara',
                      'raza'];

  public desordenada: string[] =  [];
  public seleccionada: string;
  public anagrama: string;
  public adivinaste = false;
  public fallaste = false;
  public inputPalabra: string;
  public randomNum: number;
  constructor() { }

  ngOnInit() {
    this.randomNum = Math.floor(Math.random() * (this.palabras.length - 1)) + 0;
    this.separarLaPalabra(this.palabras[this.randomNum].toLocaleLowerCase());
    this.anagrama = this.palabras[this.randomNum + 1].toLocaleLowerCase();
  }

  separarLaPalabra(palabra: string) {
    this.seleccionada = palabra;
    const separada = palabra.split('');
    console.log(separada);

    this.desordenada = separada.sort(() => Math.random() - 0.5);
    console.log(separada)
  }

  probarPalabra() {
    this.adivinaste = false;
    this.fallaste = false;
    console.log(this.seleccionada);
    if (this.seleccionada === this.inputPalabra.toLocaleLowerCase() || this.anagrama === this.inputPalabra.toLocaleLowerCase()) {
      this.adivinaste = true;
    } else {
      this.fallaste = true;
    }
  }

}
