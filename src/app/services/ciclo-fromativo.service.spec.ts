import {TestBed} from '@angular/core/testing';

import {CicloFromativoService} from './ciclo-fromativo.service';

describe('CicloFromativoService', () => {
  let service: CicloFromativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CicloFromativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
