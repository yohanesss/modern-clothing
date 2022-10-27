import React from "react";
import { CartItem } from "../../store/cart/cart.types";
import { numberToUsd } from "../../utils/currency.util";
import {
  CartItemContainer,
  ItemDetails,
  ItemName,
} from "./cart-item.styles.js";

type CartItemProps = {
  product: CartItem;
};

const CartItemDetail = ({ product }: CartItemProps) => {
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

export default CartItemDetail;
