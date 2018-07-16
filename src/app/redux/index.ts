import {
  ActionReducer,
  MetaReducer,
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromUser from './user';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  users: fromUser.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer
};


// console.log all actions
export const debug = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<any>[] = [debug];

export const effects = [
  ...fromUser.effects
];


