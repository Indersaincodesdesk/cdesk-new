import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-4',
  templateUrl: './resource-4.component.html',
  styleUrls: ['./resource-4.component.css']
})
export class Resource4Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/benefits-of-integrating-email-marketing"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
