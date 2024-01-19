import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-5',
  templateUrl: './resource-5.component.html',
  styleUrls: ['./resource-5.component.css']
})
export class Resource5Component {
  shareableUrl: string = "http://192.168.1.18:4200/resource"; // Set the URL you want to share
}
