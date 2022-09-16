import React from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl: image, name, price } = product;
  return (
    <div className="product-card-container">
      <img src={image} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <div className="price">{price}</div>
      </div>
      <Button buttonType={"inverted"}>Add To Cart</Button>
    </div>
  );
};

export default ProductCard;
