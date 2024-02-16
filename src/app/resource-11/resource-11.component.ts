import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-11',
  templateUrl: './resource-11.component.html',
  styleUrls: ['./resource-11.component.css']
})
export class Resource11Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/elevate-your-shopify-store-with-the-section-store"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
