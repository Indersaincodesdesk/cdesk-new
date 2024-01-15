import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyWebDevelopmentComponent } from './shopify-web-development.component';

describe('ShopifyWebDevelopmentComponent', () => {
  let component: ShopifyWebDevelopmentComponent;
  let fixture: ComponentFixture<ShopifyWebDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopifyWebDevelopmentComponent]
    });
    fixture = TestBed.createComponent(ShopifyWebDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
