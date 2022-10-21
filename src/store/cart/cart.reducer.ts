import { AnyAction } from "redux";
import { setOpenCartDropdown, updateCartItemsReducer } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartInitialState = {
  readonly isOpenCartDropdown: boolean;
  readonly cartItems: CartItem[];
};

const INITIAL_STATE: CartInitialState = {
  isOpenCartDropdown: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (updateCartItemsReducer.match(action)) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (setOpenCartDropdown.match(action)) {
    return {
      ...state,
      isOpenCartDropdown: action.payload,
    };
  }

  return {
    ...state,
  };
};
