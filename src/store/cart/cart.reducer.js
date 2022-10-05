import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isOpenCartDropdown: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_OPEN_CART_DROPDOWN:
      return {
        ...state,
        isOpenCartDropdown: payload,
      };
    default:
      return state;
  }
};
