import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanaorjewelryComponent } from './tanaorjewelry.component';

describe('TanaorjewelryComponent', () => {
  let component: TanaorjewelryComponent;
  let fixture: ComponentFixture<TanaorjewelryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TanaorjewelryComponent]
    });
    fixture = TestBed.createComponent(TanaorjewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
