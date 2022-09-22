import React from "react";
import { Link } from "react-router-dom";

import "./directory-item.styles.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="directory-body-container">
        <Link
          to={`/shop/${category.title}`}
          style={{
            textDecoration: "none",
            display: "block",
            width: "100%",
            color: "inherit",
          }}
        >
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
