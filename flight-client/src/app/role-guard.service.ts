import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {UserService} from '@shared/services/user/user.service';
import {Store} from '@ngrx/store';
import * as fromApp from '@store/app.reducer';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService  implements CanActivate {

  isLoggedIn: boolean = false;
  constructor(private store: Store<fromApp.AppState>) {
    this.store.select('user').subscribe(state => this.isLoggedIn =  state.isLoggedIn);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isLoggedIn;
  }
}
