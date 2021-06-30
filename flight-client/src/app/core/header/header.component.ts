import { Component } from '@angular/core';
import * as fromApp from '@shared/root-store/app.reducer';
import {UserToken} from '@models/User';
import {getUserState, isUserLogged} from '@shared/root-store/user-store/user.selector';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  user: UserToken;
  isLoggedIn: boolean;
  
  constructor(private store: Store<fromApp.AppState>) {
    this.store.select(getUserState).subscribe(user => this.user = user);
    this.store.select(isUserLogged).subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }
}
