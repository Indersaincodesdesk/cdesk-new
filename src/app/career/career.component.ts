import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  name = "Angular";
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  roundcardConfig = {
    "mobileFirst": true,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "arrows": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": '2000', 
    "fade": true,
    "cssEase": 'linear'    
  };
}
