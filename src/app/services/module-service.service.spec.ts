import { TestBed } from '@angular/core/testing';

import { ModuleServiceService } from './module-service.service';

describe('ModuleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleServiceService = TestBed.get(ModuleServiceService);
    expect(service).toBeTruthy();
  });
});
