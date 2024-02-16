import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopify-apps-blog',
  templateUrl: './shopify-apps-blog.component.html',
  styleUrls: ['./shopify-apps-blog.component.css']
})
export class ShopifyAppsBlogComponent {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/apps-for-streamlining-your-business"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
