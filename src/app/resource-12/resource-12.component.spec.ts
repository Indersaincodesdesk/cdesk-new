import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource12Component } from './resource-12.component';

describe('Resource12Component', () => {
  let component: Resource12Component;
  let fixture: ComponentFixture<Resource12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource12Component]
    });
    fixture = TestBed.createComponent(Resource12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
