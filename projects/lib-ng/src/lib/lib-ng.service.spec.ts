import { TestBed } from '@angular/core/testing';

import { LibNgService } from './lib-ng.service';

describe('LibNgService', () => {
  let service: LibNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
