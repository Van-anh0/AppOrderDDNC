import { TestBed } from '@angular/core/testing';

import { FetchAPIService } from './fetch-api.service';

describe('FetchAPIService', () => {
  let service: FetchAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
