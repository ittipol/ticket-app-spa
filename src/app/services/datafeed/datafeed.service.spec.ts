import { TestBed, inject } from '@angular/core/testing';

import { DatafeedService } from './datafeed.service';

describe('DatafeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatafeedService]
    });
  });

  it('should be created', inject([DatafeedService], (service: DatafeedService) => {
    expect(service).toBeTruthy();
  }));
});
