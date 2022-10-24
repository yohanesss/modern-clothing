import { CategoryMap } from "./category.types";
import { createSelector } from "reselect";

import { CategoriesState } from "./category.reducer";
import { RootState } from "../store";

const selectCategoriesReducer = (state: RootState): CategoriesState => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    return categories.reduce((acc, category) => {
      const title = category["title"];
      const items = category["items"];
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
