import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // Use Effect for triggering data creation
  // =======================================
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });

  useEffect(() => {
    const getcategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
      console.log({ categoriesMap });
    };

    getcategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap: categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
