import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../store/cart/cart.selector";
import { numberToUsd } from "../../utils/currency.util";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.js";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} product={cartItem} />
      ))}
      <Total>Total: {numberToUsd(totalPrice)}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
