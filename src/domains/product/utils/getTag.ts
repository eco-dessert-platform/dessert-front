import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/commons/constants/priceLimit';
import { TAG } from '@/domains/product/constants/tag';

export const getIngredientTag = (ingredients: Array<string>) => {
  if (ingredients.length === 1) return { type: TAG.ingredient, content: ingredients[0] };
  if (ingredients.length > 1)
    return { type: TAG.ingredient, content: `${ingredients[0]} 외 ${ingredients.length - 1}개` };
};

export const getPriceTag = ({ minPrice, maxPrice }: { minPrice: number; maxPrice: number }) => {
  if (minPrice === LIMIT_MIN_PRICE && maxPrice === LIMIT_MAX_PRICE) return;
  return {
    type: TAG.price,
    content: `${minPrice.toLocaleString()}~${maxPrice.toLocaleString()}원`
  };
};