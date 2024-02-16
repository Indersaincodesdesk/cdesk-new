import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-9',
  templateUrl: './resource-9.component.html',
  styleUrls: ['./resource-9.component.css']
})
export class Resource9Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/best-auto-discounts-app-for-shopify-store"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
