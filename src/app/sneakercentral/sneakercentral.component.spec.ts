import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakercentralComponent } from './sneakercentral.component';

describe('SneakercentralComponent', () => {
  let component: SneakercentralComponent;
  let fixture: ComponentFixture<SneakercentralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SneakercentralComponent]
    });
    fixture = TestBed.createComponent(SneakercentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
