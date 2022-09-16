import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setOpenCartDropdown, isOpenCartDropdown, cartItems } =
    useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setOpenCartDropdown(!isOpenCartDropdown)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
