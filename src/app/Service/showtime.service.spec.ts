import { TestBed } from '@angular/core/testing';

import { ShowtimeService } from './showtime.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowtimeService = TestBed.get(ShowtimeService);
    expect(service).toBeTruthy();
  });
});
