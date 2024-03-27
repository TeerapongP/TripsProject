import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComComponent } from './checkout-com.component';

describe('CheckoutComComponent', () => {
  let component: CheckoutComComponent;
  let fixture: ComponentFixture<CheckoutComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutComComponent]
    });
    fixture = TestBed.createComponent(CheckoutComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
