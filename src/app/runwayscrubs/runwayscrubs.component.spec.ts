import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunwayscrubsComponent } from './runwayscrubs.component';

describe('RunwayscrubsComponent', () => {
  let component: RunwayscrubsComponent;
  let fixture: ComponentFixture<RunwayscrubsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunwayscrubsComponent]
    });
    fixture = TestBed.createComponent(RunwayscrubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
