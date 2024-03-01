import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaleflickComponent } from './taleflick.component';

describe('TaleflickComponent', () => {
  let component: TaleflickComponent;
  let fixture: ComponentFixture<TaleflickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaleflickComponent]
    });
    fixture = TestBed.createComponent(TaleflickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
