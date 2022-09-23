import React from "react";
import CategoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles.js";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
