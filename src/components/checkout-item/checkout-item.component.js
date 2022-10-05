import React from "react";
import { numberToUsd } from "../../utils/currency.util";
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
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  deleteItemFromCart,
  substractItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const substractItemFromCartHandler = () =>
    dispatch(substractItemFromCart(cartItems, product));
  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, product));
  const deleteItemFromCartHandler = () =>
    dispatch(deleteItemFromCart(cartItems, product));

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
