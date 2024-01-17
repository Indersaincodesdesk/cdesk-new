import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource14Component } from './resource-14.component';

describe('Resource14Component', () => {
  let component: Resource14Component;
  let fixture: ComponentFixture<Resource14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource14Component]
    });
    fixture = TestBed.createComponent(Resource14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
