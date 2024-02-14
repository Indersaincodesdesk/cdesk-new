import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'Codesdesk -Your Premier Shopify Plus Agency | Expert Shopify theme  Development & Web Designing Services';

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { 
   
  }
  ngOnInit(): void {
    this.titleServe.setTitle(this.title);
    this.metaServe.updateTag({name: 'description', content: "Grow your ecommerce business with custom shopify solutions. Our IT company offers app development, web design, and theme building to drive sales. Partner with experts today."});
  }
  caseConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "arrows": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": '4000', 
    "fade": true,
    "cssEase": 'linear'    
  };
  loopConfig = {
    "slidesToShow": 5,    
    "slidesToScroll": 1,
      "dots": false,
      "arrows": false,
      "infinite": true,
      "autoplay": true,
      "autoplaySpeed": 0,
      "loop": true,
      "speed": 8000,
      "centerMode": true,
      "useCSS": true,
      "cssEase": 'linear',
      "swipeToSlide":false,
      "pauseOnHover":false, 
      "variableWidth": true,     
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '0px',
          }
        }
       
      ]    
  };
}
