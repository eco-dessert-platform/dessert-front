import API from '@/api';
import { IFilterType } from '@/components/units/(main)/Products/types';
import { IAllProductsType } from '@/components/units/Search/types';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';

interface GetSearchProductsProps {
  keyword: string;
  filterValue: IFilterType;
  pageParam: number;
}

export const getSearchProducts = async ({
  keyword,
  filterValue,
  pageParam
}: GetSearchProductsProps): Promise<IAllProductsType> => {
  if (!keyword)
    return {
      content: [],
      itemAllCount: 0,
      limitItemCount: 0,
      currentItemCount: 0,
      pageNumber: 0,
      existNextPage: false
    };

  const queryString = transformFilterValueToQueryString(filterValue);
  const data: IAllProductsType = await API.get(
    `/search/boards?keyword=${keyword}&${queryString}&page=${pageParam}`
  );
  return data;
};
