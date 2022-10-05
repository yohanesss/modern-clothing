import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCartDropdown } from "../../store/cart/cart.action";
import {
  selectCartItemsTotalQtyCount,
  selectIsOpenCartDropdown,
} from "../../store/cart/cart.selector";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isOpenCartDropdown = useSelector(selectIsOpenCartDropdown);
  const cartItemsTotalQtyCount = useSelector(selectCartItemsTotalQtyCount);

  const handleToggleCartDropdown = () =>
    dispatch(setOpenCartDropdown(!isOpenCartDropdown));
  return (
    <CartIconContainer onClick={handleToggleCartDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartItemsTotalQtyCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
