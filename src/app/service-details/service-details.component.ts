import { Component } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {
  name = "Angular";
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  picsliderConfig = {
    "slidesToShow": 1,
    "dots": false,
    "arrows": false,
    "infinite": true,
    "autoplay": true,
    "fade": true,
    "autoplaySpeed": 2000,
    "slidesToScroll": 1,
    "centerMode": false,
    "centerPadding": '100px',
    "swipe":true,
    "swipeToSlide":true,
    "prevArrow": '<button class="slick-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>',
    "nextArrow": '<button class="slick-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>',
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px',
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',
        }
      }
    ]
  };
}
