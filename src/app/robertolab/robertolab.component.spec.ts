import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertolabComponent } from './robertolab.component';

describe('RobertolabComponent', () => {
  let component: RobertolabComponent;
  let fixture: ComponentFixture<RobertolabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobertolabComponent]
    });
    fixture = TestBed.createComponent(RobertolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
