import { TestBed } from '@angular/core/testing';

import { MapspaceService } from './mapspace.service';

describe('MapspaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapspaceService = TestBed.get(MapspaceService);
    expect(service).toBeTruthy();
  });
});
