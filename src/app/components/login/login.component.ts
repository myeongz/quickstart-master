/**
 * Created by Fergal P on 18/05/2017.
 */
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {  AuthenticationService } from '../services/authentication.service';
import { User } from '../user/user';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})

export class LoginComponent {
  public user = new User('', '');
  public inputError: boolean = false;

  constructor(
    private _service: AuthenticationService,
    private _router: Router) {
  }

  login() {
      this.inputError = this._service.login(this.user);
      if (!this.inputError) {
        this._router.navigate(['Home']);
      }
   }
}
