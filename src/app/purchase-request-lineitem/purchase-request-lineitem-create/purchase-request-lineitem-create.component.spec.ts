import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLineitemCreateComponent } from './purchase-request-lineitem-create.component';

describe('PurchaseRequestLineitemCreateComponent', () => {
  let component: PurchaseRequestLineitemCreateComponent;
  let fixture: ComponentFixture<PurchaseRequestLineitemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLineitemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLineitemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
