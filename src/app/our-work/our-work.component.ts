import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent {
  title = 'Our Work: Demonstrating Excellence in Shopify Development, App Development & Web Design';

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { 
   
  }

  ngOnInit(): void {
    this.titleServe.setTitle(this.title);
    this.metaServe.updateTag({name: 'description', content: "Explore our portfolio showcasing exceptional projects in app development, web designing, Shopify theme development, and e-commerce websites."});
  }
}
