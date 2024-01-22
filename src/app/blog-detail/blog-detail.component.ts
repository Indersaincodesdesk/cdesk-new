import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  shareableUrl: string = "http://localhost:4200/resource"; // Set the URL you want to share
}
