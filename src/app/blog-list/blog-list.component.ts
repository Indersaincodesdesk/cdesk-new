import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {


  blogList = {
    "swipe": true,
    "swipeToSlide": true,
    "touchMove": true,
    "dots": false,
    "arrows": false,
    "infinite": false,
    "autoplay": false,
    "variableWidth": true,
    responsive: [      
    ]
  }; 

}
