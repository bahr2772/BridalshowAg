/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckinService } from './checkin.service';

describe('CheckinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckinService]
    });
  });

  it('should ...', inject([CheckinService], (service: CheckinService) => {
    expect(service).toBeTruthy();
  }));
});
