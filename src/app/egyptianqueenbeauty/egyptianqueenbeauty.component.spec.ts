import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptianqueenbeautyComponent } from './egyptianqueenbeauty.component';

describe('EgyptianqueenbeautyComponent', () => {
  let component: EgyptianqueenbeautyComponent;
  let fixture: ComponentFixture<EgyptianqueenbeautyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgyptianqueenbeautyComponent]
    });
    fixture = TestBed.createComponent(EgyptianqueenbeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
