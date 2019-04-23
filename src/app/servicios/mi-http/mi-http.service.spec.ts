/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MiHttpService } from './mi-http.service';

describe('Service: MiHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiHttpService]
    });
  });

  it('should ...', inject([MiHttpService], (service: MiHttpService) => {
    expect(service).toBeTruthy();
  }));
});
