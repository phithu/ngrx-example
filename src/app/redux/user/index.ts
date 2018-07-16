import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as UserReducer from './user.reducer';

export * from './user.action';
export * from './user.reducer';
export * from './user.effect';

const getUsersState = createFeatureSelector<UserReducer.State>('users');

export const getAllUsers = createSelector(getUsersState, UserReducer.getUsers);

export const getLoadedUsers = createSelector(getUsersState, UserReducer.getLoadedUsers);
