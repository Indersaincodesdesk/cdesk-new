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
}
