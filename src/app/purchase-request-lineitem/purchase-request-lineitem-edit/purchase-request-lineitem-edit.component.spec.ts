import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLineitemEditComponent } from './purchase-request-lineitem-edit.component';

describe('PurchaseRequestLineitemEditComponent', () => {
  let component: PurchaseRequestLineitemEditComponent;
  let fixture: ComponentFixture<PurchaseRequestLineitemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLineitemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLineitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
