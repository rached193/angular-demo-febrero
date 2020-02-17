import { TestBed } from '@angular/core/testing';

import { CalculadoraGuardService } from './calculadora-guard.service';

describe('CalculadoraGuardService', () => {
  let service: CalculadoraGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
