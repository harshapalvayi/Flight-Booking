import { Component } from '@angular/core';
import {SessionService} from '@shared/services/session/session.service';
import {User} from '@models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  user: User;
  isLoggedIn = false;
  constructor(private sessionService: SessionService) {
    this.sessionService.userInfo.subscribe(user => {
      if (user) {
        this.user = user;
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
}
