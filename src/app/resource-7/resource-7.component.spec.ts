import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource7Component } from './resource-7.component';

describe('Resource7Component', () => {
  let component: Resource7Component;
  let fixture: ComponentFixture<Resource7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resource7Component]
    });
    fixture = TestBed.createComponent(Resource7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
