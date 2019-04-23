/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JugadoresServiceService } from './jugadores-service.service';

describe('Service: JugadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugadoresServiceService]
    });
  });

  it('should ...', inject([JugadoresServiceService], (service: JugadoresServiceService) => {
    expect(service).toBeTruthy();
  }));
});
