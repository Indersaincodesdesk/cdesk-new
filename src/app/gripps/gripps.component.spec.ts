import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrippsComponent } from './gripps.component';

describe('GrippsComponent', () => {
  let component: GrippsComponent;
  let fixture: ComponentFixture<GrippsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrippsComponent]
    });
    fixture = TestBed.createComponent(GrippsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
