import { of } from 'rxjs';
import {UserToken} from '@models/User';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import * as fromUserActions from '@store/user-store/user.action';
import {SessionService} from '@shared/services/session/session.service';
import {NotificationService} from '@shared/services/notification/notification.service';
import {AuthenticationService} from '@shared/services/authentication/authentication.service';

const handleAuthenticationForLogin = (
  expire: Date,
  email: string,
  id: number,
  type: string,
  username: string,
  accountType: number,
  token: string
) => {
  const user = new UserToken( id, accountType, type, token, username, email, expire);
  SessionService.saveUserToStorage(user);
  return new fromUserActions.LoginSuccess({ user});
};

const handleAuthenticationForSignup = (
  expire: Date,
  email: string,
  id: number,
  username: string,
  accountType: number,
  type: string,
  token: string
) => {
  const user = new UserToken( id, accountType, type, token, username, email, expire);
  SessionService.saveUserToStorage(user);
  return new fromUserActions.SignupSuccess({ user });
};

const handleLoginError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error) {
    return of(new fromUserActions.LoginFail(errorMessage));
  }

  switch (errorRes.error.message) {
    case 'USER_NAME_NOT_FOUND':
      errorMessage = 'This user does not exist.';
      break;
    case 'INVALID_CREDENTIALS':
      errorMessage = 'User name and password does not match.';
      break;
  }
  return of(new fromUserActions.LoginFail(errorMessage));
};

const handleSignupError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.message) {
    return of(new fromUserActions.SignupFail(errorMessage));
  }

  switch (errorRes.error.message) {
    case 'USER_NAME_EXISTS':
      errorMessage = 'This Username is already taken';
      break;
    case 'EMAIL_EXISTS':
      errorMessage = 'Email is already in use.';
      break;
  }
  return of(new fromUserActions.SignupFail(errorMessage));
};

@Injectable()
export class UserEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private http: HttpClient,
    private authService: AuthenticationService,
    private notification: NotificationService
  ) {}

 @Effect()
  userSignUp = this.actions$.pipe(
    ofType(fromUserActions.SIGNUP_START),
    switchMap((signupData: fromUserActions.SignupStart) => {
      return this.authService.register(signupData.payload)
        .pipe(
          tap(resData => {
            //  this.tokenService.setLogoutTimer(resData.expire);
          }),
          map(resData => {
            return handleAuthenticationForSignup(
                resData.expire,
                resData.email,
                resData.id,
                resData.username,
                resData.accountType,
                resData.type,
                resData.jwtToken
            );
          }),
          catchError(errorRes => {
            return handleSignupError(errorRes);
          })
        );
    })
  );

  @Effect()
  userLogin = this.actions$.pipe(
    ofType(fromUserActions.LOGIN_START),
    switchMap((loginData: fromUserActions.LoginStart) => {
      return this.authService.login(loginData.payload)
        .pipe(map(resData => {
            return handleAuthenticationForLogin(
                resData.expire,
                resData.email,
                resData.id,
                resData.type,
                resData.username,
                resData.accountType,
                resData.jwtToken
            );
          }),
          catchError(error => {
            return handleLoginError(error);
          })
        );
    })
  );

  @Effect({ dispatch: false })
  loginSuccessRedirect = this.actions$.pipe(
    ofType(fromUserActions.LOGIN_SUCCESS),
    tap(() => {
      this.router.navigate(['/app-home']).then();
    })
  );

  @Effect({ dispatch: false })
  signupFailRedirect = this.actions$.pipe(
    ofType(fromUserActions.SIGNUP_FAIL),
    tap(() => {
      sessionStorage.setItem('user', null);
      localStorage.setItem('user', null);
      this.router.navigate(['/app-sign-up']).then();
    })
  );


  @Effect({ dispatch: false })
  signupSuccessRedirect = this.actions$.pipe(
    ofType(fromUserActions.SIGNUP_SUCCESS),
    tap(() => {
      const toastDetails = {
        message: 'Success',
        details: 'User Registered Successfully'
      };
      this.notification.showSuccess(toastDetails);
      this.router.navigate(['/app-home']).then();
    })
  );

  @Effect({ dispatch: false })
  loginFailRedirect = this.actions$.pipe(
    ofType(fromUserActions.LOGIN_FAIL),
    tap(() => {
      sessionStorage.setItem('user', null);
      localStorage.setItem('user', null);
      this.router.navigate(['/app-sign-in']).then();
    })
  );

  @Effect({ dispatch: false })
  logout = this.actions$.pipe(
    ofType(fromUserActions.LOGOUT),
    tap(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/app-home']).then();
    })
  );

}
