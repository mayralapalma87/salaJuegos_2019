/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JuegoServiceService } from './juego-service.service';

describe('Service: JuegoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuegoServiceService]
    });
  });

  it('should ...', inject([JuegoServiceService], (service: JuegoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
