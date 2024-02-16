import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-15',
  templateUrl: './resource-15.component.html',
  styleUrls: ['./resource-15.component.css']
})
export class Resource15Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/the-best-methods-to-send-customer-account-invites-in-shopify-after-migration"; // Set the URL you want to share

  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
