import React from "react";
import { numberToUsd } from "../../utils/currency";
import {
  CartItemContainer,
  ItemDetails,
  ItemName,
} from "./cart-item.styles.js";

const CartItem = ({ product }) => {
  const { name, quantity, imageUrl, price } = product;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x {numberToUsd(price)}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
