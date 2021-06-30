import {userKey} from '@store/user-store/user.action';
import {UserState} from '@store/user-store/user.reducer';
import * as fromUserReducer from '@store/user-store/user.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getUserKey = createFeatureSelector<UserState>(userKey);

export const getUserState = createSelector(getUserKey,
  fromUserReducer.getUser);

export const isUserLogged = createSelector(getUserKey,
  fromUserReducer.isLoggedIn);
