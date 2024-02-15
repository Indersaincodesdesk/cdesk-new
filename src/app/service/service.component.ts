import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  title = 'Our Services: Expert Shopify Plus Agency for Shopify theme Development & Web Design';

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { 
   
  }

  ngOnInit(): void {
    this.titleServe.setTitle(this.title);
    this.metaServe.updateTag({name: 'description', content: "Explore our comprehensive services including app development, web designing, Shopify theme development, and e-commerce websites."});
  }


  name = "Angular";
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

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
