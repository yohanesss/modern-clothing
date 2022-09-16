import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ product }) => {
  const { addItemToCart, deleteItemFromCart, substractItemFromCart } =
    useContext(CartContext);

  const substractItemFromCartHandler = () => substractItemFromCart(product);
  const addItemToCartHandler = () => addItemToCart(product);
  const deleteItemFromCartHandler = () => deleteItemFromCart(product);

  return (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <div>
        <button onClick={substractItemFromCartHandler}>-</button>
        <span>Qty: {product.quantity}</span>
        <button onClick={addItemToCartHandler}>+</button>
      </div>
      <div>
        <button onClick={deleteItemFromCartHandler}>Remove Item</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
