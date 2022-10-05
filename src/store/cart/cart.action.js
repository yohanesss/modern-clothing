import { createAction } from "../../utils/reducer/reducer.util";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, product) => {
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

const deleteCartItem = (cartItems, product) =>
  cartItems.filter((cartItem) => cartItem.id !== product.id);

export const substractCartItem = (cartItems, product) => {
  let substractedCartItems = cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  return substractedCartItems.filter((cartItem) => cartItem.quantity > 0);
};

const substractCartItemAnotherWay = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const updateCartItemsReducer = (newCartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
  });

export const setOpenCartDropdown = (bool) =>
  createAction(CART_ACTION_TYPES.TOGGLE_OPEN_CART_DROPDOWN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return updateCartItemsReducer(newCartItems);
};

export const deleteItemFromCart = (cartItems, product) => {
  const newCartItems = deleteCartItem(cartItems, product);
  return updateCartItemsReducer(newCartItems);
};

export const substractItemFromCart = (cartItems, product) => {
  const newCartItems = substractCartItemAnotherWay(cartItems, product);
  return updateCartItemsReducer(newCartItems);
};
