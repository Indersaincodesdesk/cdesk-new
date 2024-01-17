import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource10Component } from './resource-10.component';

describe('Resource10Component', () => {
  let component: Resource10Component;
  let fixture: ComponentFixture<Resource10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource10Component]
    });
    fixture = TestBed.createComponent(Resource10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
