import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource4Component } from './resource-4.component';

describe('Resource4Component', () => {
  let component: Resource4Component;
  let fixture: ComponentFixture<Resource4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource4Component]
    });
    fixture = TestBed.createComponent(Resource4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
