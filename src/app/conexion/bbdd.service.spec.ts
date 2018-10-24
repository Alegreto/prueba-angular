import { TestBed } from '@angular/core/testing';

import { BbddService } from './bbdd.service';

describe('BbddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbddService = TestBed.get(BbddService);
    expect(service).toBeTruthy();
  });
});
