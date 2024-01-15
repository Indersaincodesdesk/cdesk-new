import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyAppDevelopmentComponent } from './shopify-app-development.component';

describe('ShopifyAppDevelopmentComponent', () => {
  let component: ShopifyAppDevelopmentComponent;
  let fixture: ComponentFixture<ShopifyAppDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopifyAppDevelopmentComponent]
    });
    fixture = TestBed.createComponent(ShopifyAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
