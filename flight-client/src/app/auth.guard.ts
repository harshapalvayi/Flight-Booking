import {Store} from '@ngrx/store';
import {User} from '@models/User';
import {Injectable} from '@angular/core';
import {AppState} from '@store/app.reducer';
import {AccountType} from '@models/AccountType';
import {getUserState} from '@store/user-store/user.selector';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user: User;
  constructor(private router: Router,
              private store: Store<AppState>) {
    this.store.select(getUserState).subscribe(user => this.user = user);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.user) {
      const role = this.user.accountType;
      switch (role) {
        case AccountType.USER:
          if (state.url === '/app-search-flight' || state.url === '/app-home') {
            return true;
          } else {
            this.router.navigate(['/']).then();
            return false;
          }
          break;
        case AccountType.ADMIN:
          if (state.url === '/app-manage-airlines' || state.url === '/app-home' || state.url === '/app-search-flight') {
            return true;
          } else {
            this.router.navigate(['/']).then();
            return false;
          }
          break;
      }
    }
    // not logged in so redirect to login page with return url
    this.router.navigate(['/'], {queryParams: {returnUrl: state.url }}).then();
    return false;
  }
}
