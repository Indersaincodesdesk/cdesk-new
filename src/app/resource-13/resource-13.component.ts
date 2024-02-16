import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-13',
  templateUrl: './resource-13.component.html',
  styleUrls: ['./resource-13.component.css']
})
export class Resource13Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/the-impact-of-a-countdown-timer-bar-app"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
