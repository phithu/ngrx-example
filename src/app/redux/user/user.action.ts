import { Action } from '@ngrx/store';

export enum UserActionTypes {
  SetUser = '[USER] SetUser',
  AddUser = '[USER] AddUser',
}

export class SetUser implements Action {
  readonly type = UserActionTypes.SetUser;

  constructor(public payload: any) {
  }
}

export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;

  constructor(public payload: any) {
  }
}

export type UserActions = SetUser | AddUser;
