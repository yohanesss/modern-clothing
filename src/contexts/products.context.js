import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util.js";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Use Effect for triggering data creation
  // =======================================
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });

  useEffect(() => {
    const getcategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log({ categoriesMap });
    };

    getcategoriesMap();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
