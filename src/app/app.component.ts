import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `    

    <router-outlet></router-outlet>
  `
  //templateUrl: './home.component.html',
  //styleUrls: ['./homeStyle.css'],
})
export class AppComponent  {
  public images = ['./assets/test_img.jpg', './assets/test_img.jpg'];
}
