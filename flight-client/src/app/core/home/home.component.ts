import { Component } from '@angular/core';
import {User} from '@models/User';
import {UserService} from '@shared/services/user/user.service';
import {SessionService} from '@shared/services/session/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  user: User;
  constructor(public userService: UserService,
              private sessionService: SessionService) {
    this.sessionService.userInfo.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

}
