import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FameschocolatesComponent } from './fameschocolates.component';

describe('FameschocolatesComponent', () => {
  let component: FameschocolatesComponent;
  let fixture: ComponentFixture<FameschocolatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FameschocolatesComponent]
    });
    fixture = TestBed.createComponent(FameschocolatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
