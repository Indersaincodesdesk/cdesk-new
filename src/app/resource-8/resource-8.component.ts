import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-8',
  templateUrl: './resource-8.component.html',
  styleUrls: ['./resource-8.component.css']
})
export class Resource8Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/potential-of-pickup-delivery-date-in-the-pickeasy-app"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
