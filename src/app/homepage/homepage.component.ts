import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'Codesdesk';

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { 
   
  }
  ngOnInit(): void {
    this.titleServe.setTitle(this.title);
    this.metaServe.updateTag({name: 'description', content: "Codesdesk Website"});
  }
  caseConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
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
