import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnansipalaceforkidsComponent } from './anansipalaceforkids.component';

describe('AnansipalaceforkidsComponent', () => {
  let component: AnansipalaceforkidsComponent;
  let fixture: ComponentFixture<AnansipalaceforkidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnansipalaceforkidsComponent]
    });
    fixture = TestBed.createComponent(AnansipalaceforkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
