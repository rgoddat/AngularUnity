import { TestBed, inject } from '@angular/core/testing';

import { UnityAngularService } from './unity-angular.service';

describe('UnityAngularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnityAngularService]
    });
  });

  it('should be created', inject([UnityAngularService], (service: UnityAngularService) => {
    expect(service).toBeTruthy();
  }));
});
