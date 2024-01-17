import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource11Component } from './resource-11.component';

describe('Resource11Component', () => {
  let component: Resource11Component;
  let fixture: ComponentFixture<Resource11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource11Component]
    });
    fixture = TestBed.createComponent(Resource11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
