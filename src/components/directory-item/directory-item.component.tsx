import React from "react";
import { DirectoryCategory } from "../directory/directory.component.js";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  ShopLink,
} from "./directory-item.styles";

type CategoryItemProps = {
  category: DirectoryCategory;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
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
