import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { numberToUsd } from "../../utils/currency";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles.js";

const CheckoutItem = ({ product }) => {
  const { addItemToCart, deleteItemFromCart, substractItemFromCart } =
    useContext(CartContext);

  const substractItemFromCartHandler = () => substractItemFromCart(product);
  const addItemToCartHandler = () => addItemToCart(product);
  const deleteItemFromCartHandler = () => deleteItemFromCart(product);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={product.imageUrl} alt={`${product.name}`} />
      </ImageContainer>
      <Name>{product.name}</Name>
      <Quantity>
        <Arrow onClick={substractItemFromCartHandler}>&#10094;</Arrow>
        <Value>{product.quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{numberToUsd(product.price)}</Price>
      <RemoveButton onClick={deleteItemFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
