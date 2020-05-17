import { TestBed } from '@angular/core/testing';

import { AddTradingSystemService } from './add-trading-system.service';

describe('AddTradingSystemService', () => {
  let service: AddTradingSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTradingSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
