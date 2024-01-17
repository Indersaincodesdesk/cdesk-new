import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource8Component } from './resource-8.component';

describe('Resource8Component', () => {
  let component: Resource8Component;
  let fixture: ComponentFixture<Resource8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource8Component]
    });
    fixture = TestBed.createComponent(Resource8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
