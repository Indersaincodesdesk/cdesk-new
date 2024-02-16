import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-6',
  templateUrl: './resource-6.component.html',
  styleUrls: ['./resource-6.component.css']
})
export class Resource6Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/power-of-language-translation-with-langshop-app"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
