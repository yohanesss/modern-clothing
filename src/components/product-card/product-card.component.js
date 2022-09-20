import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { numberToUsd } from "../../utils/currency";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl: image, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={image} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <div className="price">{numberToUsd(price)}</div>
      </div>
      <Button buttonType={"inverted"} onClick={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
