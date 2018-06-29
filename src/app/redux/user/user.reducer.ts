import {
  UserActions,
  UserActionTypes,
} from './user.action';


export interface State {
  users: Array<any>;
}

const initialState: State = {
  users: [],
};

export const reducer = (state: State = initialState, action: UserActions): State => {

  const cloneUser = [...state.users];

  switch (action.type) {
    case UserActionTypes.SetUser:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export const getUsers = (state: State) => state.users;
