import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `    

    <router-outlet></router-outlet>
  `

})
export class AppComponent  {
  public images = ['./test_img.jpg', './assets/test_img.jpg'];

}
