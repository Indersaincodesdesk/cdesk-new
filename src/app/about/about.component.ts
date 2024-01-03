import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  caseConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "arrows": false,
    "infinite": true,
    "autoplay": false,
    "autoplaySpeed": '2000', 
    "fade": true,
    "cssEase": 'linear'    
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
