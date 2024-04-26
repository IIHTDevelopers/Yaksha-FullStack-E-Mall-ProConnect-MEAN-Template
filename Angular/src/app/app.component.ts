import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Mall ProConnect';
  isLoggedIn: boolean = false;

  constructor() {
  }

  onLogout() {
    // write your logic here
  }
}
