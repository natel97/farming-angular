import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor() {
    setInterval(() => document.getElementsByTagName('body')[0].
    classList.toggle('night'), 60000);
  }
}
