import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLineitemListComponent } from './purchase-request-lineitem-list.component';

describe('PurchaseRequestLineitemListComponent', () => {
  let component: PurchaseRequestLineitemListComponent;
  let fixture: ComponentFixture<PurchaseRequestLineitemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLineitemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLineitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
