import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'About Us: Your Trusted Shopify Plus Agency for Shopify theme  Development and Web Designing';

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { 
   
  }

  ngOnInit(): void {
    this.titleServe.setTitle(this.title);
    this.metaServe.updateTag({name: 'description', content: "Discover the journey of our top-rated Shopify Plus agency. Specialising in app development, web designing, Shopify theme development, and e-commerce websites."});
  }

  caseConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "arrows": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": '2000', 
    "fade": true,
    "cssEase": 'linear',
    "pauseOnHover": false,
  };

  teamcaseConfig = {
    "slidesToShow": 1,    
    "slidesToScroll": 1,
      "dots": false,
      "arrows": false,
      "infinite": true,
      "autoplay": true,
      "autoplaySpeed": 0,
      "variableWidth": true,
      "speed": 20000,
      "pauseOnHover": false,
      "cssEase": 'linear',      
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }       
      ]
    };
}
