import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setOpenCartDropdown, isOpenCartDropdown, cartItemsTotalQtyCount } =
    useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setOpenCartDropdown(!isOpenCartDropdown)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsTotalQtyCount}</span>
    </div>
  );
};

export default CartIcon;
