import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLineitemReviewComponent } from './purchase-request-lineitem-review.component';

describe('PurchaseRequestLineitemReviewComponent', () => {
  let component: PurchaseRequestLineitemReviewComponent;
  let fixture: ComponentFixture<PurchaseRequestLineitemReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLineitemReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLineitemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
