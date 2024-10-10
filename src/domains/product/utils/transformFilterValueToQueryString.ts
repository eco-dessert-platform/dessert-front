import { IFilterType } from '@/domains/product/types/filterType';
import {
  transformCategoryToEng,
  transformSortToEng,
  transformTagToEng
} from '@/domains/product/utils/transfromTag';
import { isEqualArray } from '@/domains/product/utils/isEqualArray';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';

const excludeInitFilterValue = (query: Partial<IFilterType>): Partial<IFilterType> =>
  Object.keys(query)
    .filter((key) => {
      const k = key as keyof IFilterType;
      const value = query[k];
      const initValue = INIT_FILTER_VALUE[k];
      const isArray = Array.isArray(value) && Array.isArray(initValue);
      return isArray ? !isEqualArray(value, initValue) : value !== initValue;
    })
    .reduce((acc, key) => {
      const k = key as keyof IFilterType;
      return { ...acc, [k]: query[k] };
    }, {});

export const transformFilterValueToQueryString = (query: Partial<IFilterType>) => {
  const { category, tags, price, sort, orderAvailableToday } = excludeInitFilterValue(query);

  const categoryQuery = category && {
    category: transformCategoryToEng(category)
  };
  const tagsQuery =
    tags &&
    tags
      .map((tag) => transformTagToEng(tag))
      .reduce(
        (acc, tag) => ({
          ...acc,
          [tag]: true
        }),
        {}
      );
  const minPriceQuery = price && {
    minPrice: String(Math.min(...price))
  };
  const maxPriceQuery = price && {
    maxPrice: String(Math.max(...price))
  };
  const sortQuery = sort && { sort: transformSortToEng(sort) };
  const orderAvailableTodayQuery = orderAvailableToday && {
    orderAvailableToday: String(orderAvailableToday)
  };

  const queryObject = {
    ...categoryQuery,
    ...tagsQuery,
    ...minPriceQuery,
    ...maxPriceQuery,
    ...sortQuery,
    ...orderAvailableTodayQuery
  };

  return new URLSearchParams(queryObject).toString();
};
