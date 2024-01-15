import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisSelectComponent } from './paris-select.component';

describe('ParisSelectComponent', () => {
  let component: ParisSelectComponent;
  let fixture: ComponentFixture<ParisSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParisSelectComponent]
    });
    fixture = TestBed.createComponent(ParisSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
