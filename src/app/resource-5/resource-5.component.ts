import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-5',
  templateUrl: './resource-5.component.html',
  styleUrls: ['./resource-5.component.css']
})
export class Resource5Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/build-a-winning-shopify-store"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
