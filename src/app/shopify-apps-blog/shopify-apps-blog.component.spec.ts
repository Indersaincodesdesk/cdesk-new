import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyAppsBlogComponent } from './shopify-apps-blog.component';

describe('ShopifyAppsBlogComponent', () => {
  let component: ShopifyAppsBlogComponent;
  let fixture: ComponentFixture<ShopifyAppsBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopifyAppsBlogComponent]
    });
    fixture = TestBed.createComponent(ShopifyAppsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
