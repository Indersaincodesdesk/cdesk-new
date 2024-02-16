import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-10',
  templateUrl: './resource-10.component.html',
  styleUrls: ['./resource-10.component.css']
})
export class Resource10Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/auto-add-to-cart-free-gift-on-eg-auto"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
