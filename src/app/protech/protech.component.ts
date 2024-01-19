import { Component } from '@angular/core';

@Component({
  selector: 'app-protech',
  templateUrl: './protech.component.html',
  styleUrls: ['./protech.component.css']
})
export class ProtechComponent {
  name = "Angular";
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  caseslider = {
    "slidesToShow": 3,    
    "slidesToScroll": 1,
      "dots": false,
      "arrows": true,
      "infinite": true,
      "autoplay": false,
      "autoplaySpeed": 0,
      "variableWidth": true,
      "pauseOnHover": false,  
      "prevArrow": '<button class="slick-arrow prev-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.80281 1.04453L7.59558 0.251758C7.93126 -0.0839192 8.47405 -0.0839192 8.80616 0.251758L15.7482 7.19027C16.0839 7.52595 16.0839 8.06874 15.7482 8.40085L8.80616 15.3429C8.47048 15.6786 7.92769 15.6786 7.59558 15.3429L6.80281 14.5502C6.46356 14.2109 6.47071 13.6574 6.8171 13.3253L11.1202 9.22576H0.857047C0.3821 9.22576 0 8.84366 0 8.36871V7.22598C0 6.75103 0.3821 6.36893 0.857047 6.36893H11.1202L6.8171 2.26939C6.46714 1.93728 6.45999 1.38377 6.80281 1.04453Z" fill="black"/></svg></button>',
      "nextArrow": '<button class="slick-arrow next-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.19719 14.5502L8.40442 15.343C8.06874 15.6786 7.52595 15.6786 7.19384 15.343L0.251758 8.40446C-0.0839195 8.06878 -0.0839195 7.52598 0.251758 7.19388L7.19384 0.251796C7.52952 -0.0838814 8.07231 -0.0838814 8.40442 0.251796L9.19719 1.04456C9.53644 1.38381 9.52929 1.93732 9.1829 2.26943L4.87981 6.36897L15.143 6.36897C15.6179 6.36897 16 6.75107 16 7.22602V8.36875C16 8.84369 15.6179 9.22579 15.143 9.22579L4.87981 9.22579L9.1829 13.3253C9.53286 13.6574 9.54001 14.211 9.19719 14.5502Z" fill="black"/></svg></button>',   
      responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
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
