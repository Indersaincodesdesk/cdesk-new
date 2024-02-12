import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  title = 'Meet Our Shopify Expert Team: Leading IT Company for Shopify theme Development & Web Design';

  constructor(
    private titleServe: Title,
    private metaServe: Meta
  ) { 
   
  }

  ngOnInit(): void {
    this.titleServe.setTitle(this.title);
    this.metaServe.updateTag({name: 'description', content: "shopify Plus agency for custom ecommerce stores. IT company for app development, web design, theme customization. Build your online store with our experienced Shopify experts."});
  }
}
