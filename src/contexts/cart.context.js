import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const isProductExists = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (isProductExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
  // return new array with modified cart items / new cart items
};

export const CartContext = createContext({
  isOpenCartDropdown: false,
  setOpenCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpenCartDropdown, setOpenCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  console.log({ cartItems });

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  return (
    <CartContext.Provider
      value={{
        isOpenCartDropdown,
        setOpenCartDropdown,
        cartItems,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
