import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  shareableUrl: string = "https://codesdesk.co.in/resource/tips-for-optimizing-your-shopify-store"; // Set the URL you want to share
}
