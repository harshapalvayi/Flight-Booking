import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SessionService} from '@shared/services/session/session.service';
import {AccountType} from '@models/AccountType';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private sessionService: SessionService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.sessionService.getUserProfile();
    if (currentUser) {
      const role = currentUser.accountType;
      switch (role) {
        case AccountType.USER:
          if (state.url === '/app-book-flight' || state.url === '/app-home') {
            return true;
          } else {
            this.router.navigate(['/']).then();
            return false;
          }
          break;
        case AccountType.ADMIN:
          if (state.url === '/app-manage-airlines' || state.url === '/app-home') {
            return true;
          } else {
            this.router.navigate(['/']).then();
            return false;
          }
      }
    }
      // not logged in so redirect to login page with return url
    this.router.navigate(['/'], {queryParams: {returnUrl: state.url }}).then();
    return false;
  }
}
