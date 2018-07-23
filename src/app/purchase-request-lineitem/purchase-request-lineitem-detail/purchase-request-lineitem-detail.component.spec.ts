import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLineitemDetailComponent } from './purchase-request-lineitem-detail.component';

describe('PurchaseRequestLineitemDetailComponent', () => {
  let component: PurchaseRequestLineitemDetailComponent;
  let fixture: ComponentFixture<PurchaseRequestLineitemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLineitemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLineitemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
