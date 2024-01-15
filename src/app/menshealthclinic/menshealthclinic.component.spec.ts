import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshealthclinicComponent } from './menshealthclinic.component';

describe('MenshealthclinicComponent', () => {
  let component: MenshealthclinicComponent;
  let fixture: ComponentFixture<MenshealthclinicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenshealthclinicComponent]
    });
    fixture = TestBed.createComponent(MenshealthclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
