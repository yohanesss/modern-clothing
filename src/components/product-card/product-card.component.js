import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { numberToUsd } from "../../utils/currency";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles.js";

const ProductCard = ({ product }) => {
  const { imageUrl: image, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={image} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{numberToUsd(price)}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
