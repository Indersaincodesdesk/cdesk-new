import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource13Component } from './resource-13.component';

describe('Resource13Component', () => {
  let component: Resource13Component;
  let fixture: ComponentFixture<Resource13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource13Component]
    });
    fixture = TestBed.createComponent(Resource13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
