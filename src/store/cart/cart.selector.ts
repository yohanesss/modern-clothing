import { CartInitialState } from "./cart.reducer";
import { createSelector } from "reselect";
import { CartItem } from "./cart.types";

const getUpdatedCartTotalQty = (cartItems: CartItem[]) =>
  cartItems.reduce((totalCount, item) => totalCount + item.quantity, 0);

const getUpdatedCartTotalPrice = (cartItems: CartItem[]) =>
  cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

const selectCartReducer = (state): CartInitialState => {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    return cartSlice.cartItems;
  }
);

export const selectCartItemsTotalQtyCount = createSelector(
  [selectCartItems],
  (cartItems) => getUpdatedCartTotalQty(cartItems)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => getUpdatedCartTotalPrice(cartItems)
);

export const selectIsOpenCartDropdown = createSelector(
  [selectCartReducer],
  (cart) => {
    return cart.isOpenCartDropdown;
  }
);
