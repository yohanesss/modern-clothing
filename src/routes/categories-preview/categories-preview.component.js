import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
