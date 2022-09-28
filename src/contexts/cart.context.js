import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.util";

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

const getUpdatedCartTotalQty = (cartItems) =>
  cartItems.reduce((totalCount, item) => totalCount + item.quantity, 0);

const getUpdatedCartTotalPrice = (cartItems) =>
  cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

const INITIAL_STATE = {
  isOpenCartDropdown: false,
  cartItems: [],
  cartItemsTotalQtyCount: 0,
  totalPrice: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_OPEN_CART_DROPDOWN: "TOGGLE_OPEN_CART_DROPDOWN",
};

const cartReducer = (state, action) => {
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
      throw new Error(`Unhandled type ${type} on cartReducer`);
  }
};

export const CartContext = createContext({
  isOpenCartDropdown: false,
  setOpenCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  substractItemFromCart: () => {},
  cartItemsTotalQtyCount: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [
    { cartItems, cartItemsTotalQtyCount, totalPrice, isOpenCartDropdown },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartItemsTotalQtyCount: getUpdatedCartTotalQty(newCartItems),
        totalPrice: getUpdatedCartTotalPrice(newCartItems),
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const deleteItemFromCart = (product) => {
    const newCartItems = deleteCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const substractItemFromCart = (product) => {
    const newCartItems = substractCartItemAnotherWay(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const setOpenCartDropdown = () => {
    dispatch(
      createAction(
        CART_ACTION_TYPES.TOGGLE_OPEN_CART_DROPDOWN,
        !isOpenCartDropdown
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        isOpenCartDropdown,
        setOpenCartDropdown,
        cartItems,
        addItemToCart,
        deleteItemFromCart,
        substractItemFromCart,
        cartItemsTotalQtyCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
