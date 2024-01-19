import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-4',
  templateUrl: './resource-4.component.html',
  styleUrls: ['./resource-4.component.css']
})
export class Resource4Component {
  shareableUrl: string = "http://192.168.1.18:4200/resource"; // Set the URL you want to share
}
