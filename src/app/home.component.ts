/**
 * Created by myeongjji on 2017. 5. 24..
 */
import { Component } from '@angular/core';
import { ProfileComponent } from './profile.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./homeStyle.css'],
})
export class HomeComponent { name = 'Angular'; }
