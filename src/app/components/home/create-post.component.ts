/**
 * Created by myeongjji on 2017. 5. 28..
 */
import { Component } from '@angular/core';

@Component({
  selector: 'create-post',
  template: `
    <div class="post">
      <div id="column-1" class="post">update status | add photos/videos | create photo album
        <hr>
        <br><br><br><br><br><br>
        <hr>
      </div>
      <div id="postpos" class="post"><input type="submit" id="buttonpost" value="post"/></div>
      <div id="postboxpos" class="post"><textarea placeholder="What's in your mind" id="postbox"
                                                  ng-model="textareaModel"></textarea></div>
    </div>    `,
  styleUrls: ['./home.component.css'],
})
export class CreatePostComponent {

}
