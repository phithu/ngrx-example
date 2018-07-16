import {
  UserActions,
  UserActionTypes,
} from './user.action';


export interface State {
  users: Array<any>;
  loaderUsers: boolean;
}

const initialState: State = {
  users: [],
  loaderUsers: false
};

export const reducer = (state: State = initialState, action: UserActions): State => {

  const cloneUser = [...state.users];

  switch (action.type) {
    case UserActionTypes.SetUser:
      return {
        ...state,
        users: action.payload
      };
    case UserActionTypes.LoadingUser:
      return {
        ...state,
        loaderUsers: action.payload
      };
    default:
      return state;
  }
};

export const getUsers = (state: State) => state.users;
export const getLoadedUsers = (status: State) => status.loaderUsers;
