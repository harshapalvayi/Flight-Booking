import {Action} from '@ngrx/store';
import {UserToken} from '@models/User';

export const userKey = 'user';
export const LOGIN_START = '[User] Login Start';
export const LOGIN_SUCCESS = '[User] Login Success';
export const LOGIN_FAIL = '[User] Login Fail';
export const SIGNUP_START = '[User] Signup Start';
export const SIGNUP_SUCCESS = '[User] Signup Success';
export const SIGNUP_FAIL = '[User] Signup Fail';
export const LOGOUT = '[User] Logout';

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: {
    username: string;
    password: string
  }) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: {
    user: UserToken
  }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(public payload: {
    username: string;
    password: string;
    email: string
  }) {}
}

export class SignupSuccess implements Action {
  readonly type = SIGNUP_SUCCESS;

  constructor(public payload: {
    user: UserToken
  }) {}
}

export class SignupFail implements Action {
  readonly type = SIGNUP_FAIL;
  constructor(public payload: string) {}
}


export class Logout implements Action {
  readonly type = LOGOUT;
}

export type UserActions = LoginStart
  | LoginSuccess
  | LoginFail
  | SignupStart
  | SignupSuccess
  | SignupFail
  | Logout;
