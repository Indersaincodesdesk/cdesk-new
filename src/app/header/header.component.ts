import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mega_menu_slider = {
    "slidesToShow": 4,    
    // "slidesToScroll": 1,
    "swipe": true,
    "swipeToSlide": true,
    "touchMove": true,
      "dots": false,
      "arrows": false,
      "infinite": false,
      "autoplay": false,
      "autoplaySpeed": 0,
      "loop": false,
      "speed": 0,
      "centerMode": false,
      "useCSS": true,
      "cssEase": 'linear',
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
