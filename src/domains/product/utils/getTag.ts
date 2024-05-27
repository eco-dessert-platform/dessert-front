import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/domains/product/constants/priceLimit';
import { TAG } from '@/domains/product/constants/tag';

export const getIngredientTag = (ingredients: Array<string>) => {
  if (ingredients.length === 1) return { type: TAG.ingredient, content: ingredients[0] };
  if (ingredients.length > 1)
    return { type: TAG.ingredient, content: `${ingredients[0]} 외 ${ingredients.length - 1}개` };
  return undefined;
};

export const getPriceTag = (price: Array<number>) => {
  const minPrice = Math.min(...price);
  const maxPrice = Math.max(...price);
  if (minPrice === LIMIT_MIN_PRICE && maxPrice === LIMIT_MAX_PRICE) return undefined;
  return {
    type: TAG.price,
    content: `${minPrice.toLocaleString()}~${maxPrice.toLocaleString()}원`
  };
};
