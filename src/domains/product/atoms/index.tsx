import { atomFamily, selectorFamily, DefaultValue } from 'recoil';
import {
  ICategoryType,
  ITagsType,
  IPriceType,
  IFilterType,
  FilterFamilyIDType
} from '@/domains/product/types/filterType';
import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE } from '@/domains/product/constants/priceLimit';

export const categoryTempState = atomFamily<ICategoryType, FilterFamilyIDType>({
  key: 'category',
  default: undefined
});

export const tagsTempState = atomFamily<ITagsType, FilterFamilyIDType>({
  key: 'ingredient',
  default: undefined
});

export const priceTempState = atomFamily<IPriceType, FilterFamilyIDType>({
  key: 'price',
  default: [LIMIT_MIN_PRICE, LIMIT_MAX_PRICE]
});

export const filterValueState = atomFamily<IFilterType, FilterFamilyIDType>({
  key: 'filterValueState',
  default: {
    category: undefined,
    tags: undefined,
    price: [LIMIT_MIN_PRICE, LIMIT_MAX_PRICE],
    sort: '추천순',
    showProductsAvailableOrder: false
  }
});

export const filterValueTempState = selectorFamily<IFilterType, FilterFamilyIDType>({
  key: 'filterValueTempState',
  get:
    (filterFamilyId) =>
    ({ get }) => {
      const category = get(categoryTempState(filterFamilyId));
      const tags = get(tagsTempState(filterFamilyId));
      const price = get(priceTempState(filterFamilyId));
      const filterValue = get(filterValueState(filterFamilyId));

      return {
        ...filterValue,
        category,
        tags,
        price
      };
    },
  set:
    (filterFamilyId) =>
    ({ set }, newValue) => {
      if (newValue instanceof DefaultValue) return;

      set(categoryTempState(filterFamilyId), newValue.category);
      set(tagsTempState(filterFamilyId), newValue.tags);
      set(priceTempState(filterFamilyId), newValue.price);
    }
});
