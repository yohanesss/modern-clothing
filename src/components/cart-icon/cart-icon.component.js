import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { setOpenCartDropdown, isOpenCartDropdown, cartItemsTotalQtyCount } =
    useContext(CartContext);
  return (
    <CartIconContainer onClick={() => setOpenCartDropdown(!isOpenCartDropdown)}>
      <ShoppingIcon />
      <ItemCount>{cartItemsTotalQtyCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
