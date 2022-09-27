import React from "react";
import { Link } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  ShopLink,
} from "./directory-item.styles.js";

const CategoryItem = ({ category }) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body>
        <ShopLink to={category.route}>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </ShopLink>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
