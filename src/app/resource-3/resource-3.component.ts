import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-3',
  templateUrl: './resource-3.component.html',
  styleUrls: ['./resource-3.component.css']
})
export class Resource3Component {
  shareableUrl: string = "http://localhost:4200/resource-3"; // Set the URL you want to share
}
