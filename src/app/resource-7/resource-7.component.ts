import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-7',
  templateUrl: './resource-7.component.html',
  styleUrls: ['./resource-7.component.css']
})
export class Resource7Component {
  @Input() shareableUrl: string = "https://codesdesk.co.in/resource/websites-seo-ranking-with-html-and-xml-sitemaps"; // Set the URL you want to share
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
