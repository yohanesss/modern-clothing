export const selectCategoriesMap = (state) => {
  const categoryMap = state.categories.categories.reduce((acc, category) => {
    const title = category["title"];
    const items = category["items"];
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  console.log("selector fired");

  return categoryMap;
};
