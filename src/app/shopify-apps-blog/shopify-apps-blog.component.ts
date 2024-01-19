import { Component } from '@angular/core';

@Component({
  selector: 'app-shopify-apps-blog',
  templateUrl: './shopify-apps-blog.component.html',
  styleUrls: ['./shopify-apps-blog.component.css']
})
export class ShopifyAppsBlogComponent {
  shareableUrl: string = "http://192.168.1.18:4200/resource"; // Set the URL you want to share
}
