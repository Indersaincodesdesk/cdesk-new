import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtechComponent } from './protech.component';

describe('ProtechComponent', () => {
  let component: ProtechComponent;
  let fixture: ComponentFixture<ProtechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtechComponent]
    });
    fixture = TestBed.createComponent(ProtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
