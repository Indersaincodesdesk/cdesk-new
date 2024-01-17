import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource9Component } from './resource-9.component';

describe('Resource9Component', () => {
  let component: Resource9Component;
  let fixture: ComponentFixture<Resource9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource9Component]
    });
    fixture = TestBed.createComponent(Resource9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
