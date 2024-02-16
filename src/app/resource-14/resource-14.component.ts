import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-14',
  templateUrl: './resource-14.component.html',
  styleUrls: ['./resource-14.component.css']
})
export class Resource14Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/maximising-roi-multi-facebook-pixels"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
