import {Component, OnInit} from '@angular/core';
import {User, UserToken} from '@models/User';
import * as fromApp from '@shared/root-store/app.reducer';

import {Store} from '@ngrx/store';
import {getUserState} from '@store/user-store/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  user: UserToken;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select(getUserState).subscribe(user => this.user = user);
  }
}
