import { TestBed } from '@angular/core/testing';

import { ZipService } from './zip.service';

describe('QuestService', () => {
  let service: ZipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
