import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { numberToUsd } from "../../utils/currency";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { addItemToCart, deleteItemFromCart, substractItemFromCart } =
    useContext(CartContext);

  const substractItemFromCartHandler = () => substractItemFromCart(product);
  const addItemToCartHandler = () => addItemToCart(product);
  const deleteItemFromCartHandler = () => deleteItemFromCart(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={product.imageUrl} alt={`${product.name}`} />
      </div>
      <span className="name">{product.name}</span>
      <span className="quantity">
        <button className="arrow" onClick={substractItemFromCartHandler}>
          &#10094;
        </button>
        <span className="value">{product.quantity}</span>
        <button className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </button>
      </span>
      <span className="price">{numberToUsd(product.price)}</span>
      <div className="remove-button" onClick={deleteItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
