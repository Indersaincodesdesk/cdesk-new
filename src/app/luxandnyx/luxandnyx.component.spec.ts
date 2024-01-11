import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxandnyxComponent } from './luxandnyx.component';

describe('LuxandnyxComponent', () => {
  let component: LuxandnyxComponent;
  let fixture: ComponentFixture<LuxandnyxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuxandnyxComponent]
    });
    fixture = TestBed.createComponent(LuxandnyxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
