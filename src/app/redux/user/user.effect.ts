import { Injectable } from '@angular/core';
import * as fromUser from './user.action';

import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  map,
  switchMap
} from 'rxjs/operators';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})

class UserEffect {

  constructor(private userService: UserService,
              private actions: Actions) {
  }

  @Effect({dispatch: true}) private loadedUser$ = this.actions.pipe(
    ofType(fromUser.UserActionTypes.LoadingUser),
    switchMap(() => this.userService.getUser().pipe(
      map(user => new fromUser.SetUser(user)),
    ))
  );
}

export const effects: any[] = [UserEffect];
