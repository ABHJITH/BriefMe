import { TestBed } from '@angular/core/testing';

import { TechblogApiService } from './techblog-api.service';

describe('TechblogApiService', () => {
  let service: TechblogApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechblogApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
