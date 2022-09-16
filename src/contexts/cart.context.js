import { createContext, useState } from "react";

export const CartContext = createContext({
  isOpenCartDropdown: false,
  setOpenCartDropdown: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpenCartDropdown, setOpenCartDropdown] = useState(false);

  return (
    <CartContext.Provider value={{ isOpenCartDropdown, setOpenCartDropdown }}>
      {children}
    </CartContext.Provider>
  );
};
