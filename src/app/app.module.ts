import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';//추가함
import { ProfileComponent } from './profile.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path:'',
        redirectTo: '/profile',
        pathMatch: 'full'
      }
      ])
  ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent],
  providers: [
    //HeroService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
