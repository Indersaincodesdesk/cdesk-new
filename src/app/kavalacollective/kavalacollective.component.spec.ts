import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KavalacollectiveComponent } from './kavalacollective.component';

describe('KavalacollectiveComponent', () => {
  let component: KavalacollectiveComponent;
  let fixture: ComponentFixture<KavalacollectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KavalacollectiveComponent]
    });
    fixture = TestBed.createComponent(KavalacollectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
