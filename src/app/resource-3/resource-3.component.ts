import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-3',
  templateUrl: './resource-3.component.html',
  styleUrls: ['./resource-3.component.css']
})
export class Resource3Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/use-instagram-to-drive-sales"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
