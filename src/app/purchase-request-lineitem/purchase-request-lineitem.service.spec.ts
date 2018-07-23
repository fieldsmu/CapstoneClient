import { TestBed, inject } from '@angular/core/testing';

import { PurchaseRequestLineitemService } from './purchase-request-lineitem.service';

describe('PurchaseRequestLineitemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseRequestLineitemService]
    });
  });

  it('should be created', inject([PurchaseRequestLineitemService], (service: PurchaseRequestLineitemService) => {
    expect(service).toBeTruthy();
  }));
});
