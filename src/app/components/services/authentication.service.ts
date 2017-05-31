/**
 * Created by Fergal P on 18/05/2017.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../user/user';
import { USERS } from '../user/mock-database';



@Injectable()
export class AuthenticationService {
  public userdata = new User('', '');
  constructor(private _router: Router) {
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['Login']);
  }

  login(user: User) {
    this.userdata = USERS.find(x => x.username === user.username);
    if (user.password === this.userdata.password) {
      return false;
    }
    return true;

  }

  checkCredentials() {
    if (localStorage.getItem('user') === null) {
      this._router.navigate(['Login']);
    }
  }
}
