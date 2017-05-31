/**
 * Created by myeongjji on 2017. 5. 28..
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <div class="header1">
      <div id="img" class="header1"><a routerLink="/home"><img [src]="'/assets/Logo.png'"/></a></div>
      <div id="searcharea" class="header1">
        <input placeholder="search here..." type="text" id="searchbox/"></div>
      <div id="profilearea" class="header1">
        <img [src]="'/assets/prof.png'" id="profpic"/></div>
      <div id="profilearea1" class="header1">
        <a routerLink="/profile">Profile</a></div>
      <div id="profilearea3" class="header1">|</div>
      <div id="profilearea4" class="header1">
        <a routerLink="/home">Home</a></div>
      <div id="findf" class="header1"><img [src]="'/assets/frn.png'" height="30"/></div>
      <div id="notification" class="header1"><img [src]="'/assets/noti.png'" height="30"/></div>
      <div id="profilearea2" class="header1">|</div>
      <div id="setting" class="header1"><img [src]="'/assets/set.png'" height="30"/>

      </div>
      <div id="logout" class="header1"><a routerLink="/login-form"><img [src]="'./assets/lo.png'" height="30"/></a></div>

    </div>

  `,
  styleUrls: ['./home.component.css'],


})
export class NavBarComponent {


}

