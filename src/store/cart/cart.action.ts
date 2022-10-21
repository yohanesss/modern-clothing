import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.util";
import { CategoryItem } from "../categories/category.types";
import { CartItem, CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems: CartItem[], product: CategoryItem) => {
  const isProductExists = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (isProductExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

const deleteCartItem = (cartItems: CartItem[], product: CartItem) =>
  cartItems.filter((cartItem) => cartItem.id !== product.id);

export const substractCartItem = (cartItems: CartItem[], product: CartItem) => {
  let substractedCartItems = cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  return substractedCartItems.filter((cartItem) => cartItem.quantity > 0);
};

const substractCartItemAnotherWay = (
  cartItems: CartItem[],
  product: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export type UpdateCartItemsReducer = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  { cartItems: CartItem[] }
>;

export type SetOpenCartDropdown = ActionWithPayload<
  CART_ACTION_TYPES.TOGGLE_OPEN_CART_DROPDOWN,
  boolean
>;

export const updateCartItemsReducer = withMatcher(
  (newCartItems: CartItem[]): UpdateCartItemsReducer =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
    })
);

export const setOpenCartDropdown = withMatcher(
  (bool: boolean): SetOpenCartDropdown =>
    createAction(CART_ACTION_TYPES.TOGGLE_OPEN_CART_DROPDOWN, bool)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return updateCartItemsReducer(newCartItems);
};

export const deleteItemFromCart = (
  cartItems: CartItem[],
  product: CartItem
) => {
  const newCartItems = deleteCartItem(cartItems, product);
  return updateCartItemsReducer(newCartItems);
};

export const substractItemFromCart = (
  cartItems: CartItem[],
  product: CartItem
) => {
  const newCartItems = substractCartItemAnotherWay(cartItems, product);
  return updateCartItemsReducer(newCartItems);
};
