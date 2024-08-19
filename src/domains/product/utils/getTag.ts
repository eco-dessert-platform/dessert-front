export const getIngredientTag = (ingredients: Array<string>) => {
  if (ingredients.length > 1) return `${ingredients[0]} 외 ${ingredients.length - 1}개`;
  return ingredients[0];
};

export const getPriceTag = (price: Array<number>) => {
  const minPrice = Math.min(...price);
  const maxPrice = Math.max(...price);
  return `${minPrice.toLocaleString()}~${maxPrice.toLocaleString()}원`;
};
