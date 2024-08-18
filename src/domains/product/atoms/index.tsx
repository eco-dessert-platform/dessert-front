import { atom, atomFamily, DefaultValue, selectorFamily } from 'recoil';

import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import { LIMIT_MAX_PRICE, LIMIT_MIN_PRICE } from '@/domains/product/constants/priceLimit';
import {
  FilterFamilyIDType,
  ICategoryType,
  IFilterType,
  IPriceType,
  ITagsType
} from '@/domains/product/types/filterType';

export const categoryTempState = atomFamily<ICategoryType, FilterFamilyIDType>({
  key: 'category',
  default: INIT_FILTER_VALUE.category
});

export const tagsTempState = atomFamily<ITagsType, FilterFamilyIDType>({
  key: 'ingredient',
  default: INIT_FILTER_VALUE.tags
});

export const priceTempState = atomFamily<IPriceType, FilterFamilyIDType>({
  key: 'price',
  default: [LIMIT_MIN_PRICE, LIMIT_MAX_PRICE]
});

export const orderAvailableTodayTempState = atomFamily<boolean, FilterFamilyIDType>({
  key: 'orderAvailableToday',
  default: INIT_FILTER_VALUE.orderAvailableToday
});

export const filterValueState = atomFamily<IFilterType, FilterFamilyIDType>({
  key: 'filterValueState',
  default: INIT_FILTER_VALUE
});
export const categoryValueState = atom<string>({
  key: 'categoryValueState',
  default: '전체'
});

export const filterValueTempState = selectorFamily<IFilterType, FilterFamilyIDType>({
  key: 'filterValueTempState',
  get:
    (filterFamilyId) =>
    ({ get }) => {
      const category = get(categoryTempState(filterFamilyId));
      const tags = get(tagsTempState(filterFamilyId));
      const price = get(priceTempState(filterFamilyId));
      const orderAvailableToday = get(orderAvailableTodayTempState(filterFamilyId));
      const filterValue = get(filterValueState(filterFamilyId));

      return {
        ...filterValue,
        category,
        tags,
        price,
        orderAvailableToday
      };
    },
  set:
    (filterFamilyId) =>
    ({ set }, newValue) => {
      if (newValue instanceof DefaultValue) return;

      set(categoryTempState(filterFamilyId), newValue.category);
      set(tagsTempState(filterFamilyId), newValue.tags);
      set(priceTempState(filterFamilyId), newValue.price);
      set(orderAvailableTodayTempState(filterFamilyId), newValue.orderAvailableToday);
    }
});
