import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbahariComponent } from './shopbahari.component';

describe('ShopbahariComponent', () => {
  let component: ShopbahariComponent;
  let fixture: ComponentFixture<ShopbahariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopbahariComponent]
    });
    fixture = TestBed.createComponent(ShopbahariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
