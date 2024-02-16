import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource15Component } from './resource-15.component';

describe('Resource15Component', () => {
  let component: Resource15Component;
  let fixture: ComponentFixture<Resource15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource15Component]
    });
    fixture = TestBed.createComponent(Resource15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
