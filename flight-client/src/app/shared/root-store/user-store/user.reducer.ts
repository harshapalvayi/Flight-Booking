import {UserToken} from '@models/User';
import * as fromUserActions from '@store/user-store/user.action';

export interface UserState {
  user: UserToken;
  error: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: null,
  error: null,
  isLoggedIn: false
};

export function userReducer(state = initialState,
                            action: fromUserActions.UserActions) {
  let user = null;
  let userInfo = null;
  switch (action.type) {
    case fromUserActions.LOGIN_START:
      return {
        ...state,
        error: null,
        isLoggedIn: false
      };
    case fromUserActions.LOGIN_SUCCESS:
        userInfo = action.payload.user;
        user = new UserToken(
           userInfo.id,
           userInfo.accountType,
            userInfo.type,
           userInfo.jwtToken,
           userInfo.username,
           userInfo.email,
           userInfo.expire);
         return {
           ...state,
           user,
           error: null,
           isLoggedIn: true
         };
    case fromUserActions.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case fromUserActions.SIGNUP_START:
      return {
        ...state,
        error: null,
        isLoggedIn: false
      };
    case fromUserActions.SIGNUP_SUCCESS:
      userInfo = action.payload.user;
      user = new UserToken(
        userInfo.id,
        userInfo.accountType,
        userInfo.type,
        userInfo.jwtToken,
        userInfo.username,
        userInfo.email,
        userInfo.expire);
      return {
        ...state,
        user,
        error: null,
        isLoggedIn: true
      };
    case fromUserActions.SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case fromUserActions.LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
        isLoggedIn: false
      };
    default: return state;
  }
}

export const getUser = (state: UserState) => state.user;
export const isLoggedIn = (state: UserState) => state.isLoggedIn;
