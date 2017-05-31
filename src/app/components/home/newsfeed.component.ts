/**
 * Created by myeongjji on 2017. 5. 28..
 */
import { Component } from '@angular/core';



@Component ({
  selector: 'newsfeed',
  template: `
    
    <div class="newsfeed">
      <ul>
        <li *ngFor="let image of images">
          <div id="content"><img [src]="image"/></div>
        </li>
      </ul>
    </div>
    <div class="post1"><img [src]="'/assets/prof.png'" id="profpic"/>Troye<br><br>
      <img [src]="'/assets/test_img.jpg'" height="411" width="580"/><br><br></div>
    <div class="post2"><img [src]="'/assets/prof.png'" id="profpic"/>Julia<br><br>
      <img [src]="'/assets/test_img.jpg'" height="411" width="580"/><br><br>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})

export class NewsfeedComponent {
}
