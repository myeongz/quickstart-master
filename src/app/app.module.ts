import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavBarComponent } from './components/home/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { CreatePostComponent } from './components/home/create-post.component';
import { NewsfeedComponent } from './components/home/newsfeed.component';

import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login-form',
        component: LoginComponent },
      {
        path: '',
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
      },
      {
        path: 'create-post',
        component: CreatePostComponent
      }
      ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    LoginComponent,
    CreatePostComponent,
    NewsfeedComponent,
  ],
  providers: [
    //HeroService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
