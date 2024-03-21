import { atom } from 'recoil';
import { ICategoryType, IFilterType, ITagsType, IPriceType } from '../types';
import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/commons/constants/priceLimit';

export const categoryTempState = atom<ICategoryType>({
  key: 'category',
  default: undefined
});

export const tagsTempState = atom<ITagsType>({
  key: 'ingredient',
  default: undefined
});

export const priceTempState = atom<IPriceType>({
  key: 'price',
  default: {
    minPrice: LIMIT_MIN_PRICE,
    maxPrice: LIMIT_MAX_PRICE
  }
});

export const filterValueState = atom<IFilterType>({
  key: 'filterValueState',
  default: {
    category: undefined,
    tags: undefined,
    price: { minPrice: LIMIT_MIN_PRICE, maxPrice: LIMIT_MAX_PRICE },
    sort: '추천순',
    showProductsAvailableOrder: false
  }
});
