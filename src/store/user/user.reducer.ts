import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signUpFailed,
} from "./user.action";
import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.util";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (
    signOutFailed.match(action) ||
    signUpFailed.match(action) ||
    signInFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return { ...state };
};
