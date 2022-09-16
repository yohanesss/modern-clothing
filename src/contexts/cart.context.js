import { createContext, useEffect, useState } from "react";

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

const substractCartItem = (cartItems, product) => {
  let substractedCartItems = cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  return substractedCartItems.filter((cartItem) => cartItem.quantity > 0);
};

export const CartContext = createContext({
  isOpenCartDropdown: false,
  setOpenCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  substractItemFromCart: () => {},
  cartItemsTotalQtyCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpenCartDropdown, setOpenCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsTotalQtyCount, setCartItemsTotalQtyCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const deleteItemFromCart = (productToAdd) => {
    setCartItems(deleteCartItem(cartItems, productToAdd));
  };

  const substractItemFromCart = (productToAdd) => {
    setCartItems(substractCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    // let totalItems = 0;
    // cartItems.forEach((item) => (totalItems = totalItems + item.quantity));
    const totalItems = cartItems.reduce(
      (totalCount, item) => totalCount + item.quantity,
      0
    );
    setCartItemsTotalQtyCount(totalItems);
  }, [cartItems]);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
