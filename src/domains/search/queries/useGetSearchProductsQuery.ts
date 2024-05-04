import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { IFilterType } from '@/domains/product/types/filterType';
import { IAllProductsType } from '@/domains/search/types';
import { transformFilterValueToQueryString } from '@/domains/product/utils/transformFilterValueToQueryString';
import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

interface QueryHookProps {
  keyword: string;
  filterValue: IFilterType;
}

export const useGetSearchProductsQuery = ({ keyword, filterValue }: QueryHookProps) => {
  const queryKey = [QUERY_KEY.product, QUERY_KEY.search, { filter: filterValue, keyword }];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
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
    const res = await fetchExtend.get(
      `/search/boards?keyword=${keyword}&${queryString}&page=${pageParam}`
    );
    const { result, code, message, success }: ResultResponse<IAllProductsType> = await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }

    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllProductsType> = (
    lastPage,
    __,
    lastPageParam
  ) => {
    const nextPageParam = lastPage.existNextPage ? lastPageParam + 1 : undefined;
    return nextPageParam;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: ({ pages }) => {
      const products = pages.map((page) => page.content).flat();
      const itemCount = pages[0]?.itemAllCount || 0;
      return { products, itemCount };
    }
  });
};
