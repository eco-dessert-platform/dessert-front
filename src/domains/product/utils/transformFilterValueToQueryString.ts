import { IFilterType } from '@/domains/product/types/filterType';
import {
  transformCategoryToEng,
  transformTagToEng,
  transformSortToEng
} from '@/domains/product/utils/transfromTag';

export const transformFilterValueToQueryString = (query: IFilterType) => {
  const { category, tags, sort, showProductsAvailableOrder } = query;
  const categoryQuery = category && transformCategoryToEng(category);
  const tagsEng = tags?.map((tag) => transformTagToEng(tag));
  const tagsQuery = tagsEng?.reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: true
    }),
    {}
  );
  const sortQuery = transformSortToEng(sort);

  const queryObject = {
    category: categoryQuery || '',
    ...tagsQuery,
    minPrice: String(Math.min(...query.price)),
    maxPrice: String(Math.max(...query.price)),
    sort: sortQuery,
    orderAvailableToday: String(showProductsAvailableOrder)
  };

  return new URLSearchParams(queryObject).toString();
};
