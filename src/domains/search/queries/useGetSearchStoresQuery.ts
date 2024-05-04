import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { IAllStoreType } from '@/domains/search/types';
import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

interface QueryHookProps {
  keyword: string;
}

export const useGetSearchStoresQuery = ({ keyword }: QueryHookProps) => {
  const queryKey = [QUERY_KEY.store, QUERY_KEY.search, { keyword }];

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

    const res = await fetchExtend.get(`/search/stores?keyword=${keyword}&page=${pageParam}`);
    const { result, code, message, success }: ResultResponse<IAllStoreType> = await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }

    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllStoreType> = (
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
    select: ({ pages }) => {
      const stores = pages.map((page) => page.content).flat();
      const itemCount = pages[0]?.itemAllCount || 0;
      return { stores, itemCount };
    }
  });
};
