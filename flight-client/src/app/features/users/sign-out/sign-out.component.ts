import {Router} from '@angular/router';
import * as fromApp from '@store/app.reducer';
import { Component, OnInit } from '@angular/core';
import * as fromUserActions from '@store/user-store/user.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.sass']
})
export class SignOutComponent implements OnInit {

  constructor(public router: Router,
              public store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new fromUserActions.Logout());
  }

}
