import {User} from '@models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public getUser(): string {
    return sessionStorage.getItem('user');
  }

  static saveUserToStorage(user): void {
    const userInfo: User = {
      userid: user.userid,
      username: user.username,
      email: user.email,
      jwtToken: user.jwtToken,
      type: user.type,
      accountType: user.accountType
    };
    window.localStorage.setItem('user', JSON.stringify(userInfo));
  }

}
