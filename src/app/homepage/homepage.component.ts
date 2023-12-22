import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  caseConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "arrows": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": '8000', 
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
        // {
        //   breakpoint: 1025,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     centerPadding: '0px',
        //   }
        // },
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     centerPadding: '40px',
            
        //   }
        // },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     centerPadding: '80px',

        //   }
        // },
       
      ]    
  };
}
