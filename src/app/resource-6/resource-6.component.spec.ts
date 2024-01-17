import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource6Component } from './resource-6.component';

describe('Resource6Component', () => {
  let component: Resource6Component;
  let fixture: ComponentFixture<Resource6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource6Component]
    });
    fixture = TestBed.createComponent(Resource6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
