import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-12',
  templateUrl: './resource-12.component.html',
  styleUrls: ['./resource-12.component.css']
})
export class Resource12Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/a-reliable-tool-to-calculate-shipping-rates"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
