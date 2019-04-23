/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArchivosJugadoresService } from './archivos-jugadores.service';

describe('Service: ArchivosJugadores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchivosJugadoresService]
    });
  });

  it('should ...', inject([ArchivosJugadoresService], (service: ArchivosJugadoresService) => {
    expect(service).toBeTruthy();
  }));
});
