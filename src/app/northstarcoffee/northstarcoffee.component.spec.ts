import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthstarcoffeeComponent } from './northstarcoffee.component';

describe('NorthstarcoffeeComponent', () => {
  let component: NorthstarcoffeeComponent;
  let fixture: ComponentFixture<NorthstarcoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthstarcoffeeComponent]
    });
    fixture = TestBed.createComponent(NorthstarcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
