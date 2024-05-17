import { IAllStoresType } from '@/domains/store/types/allStoresType';
import QUERY_KEY from '@/shared/constants/queryKey';
import { ResultResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';

export const useGetAllStoresQuery = () => {
  const queryKey = [QUERY_KEY.store, QUERY_KEY.main];

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const firstPage = cursorId === -1;
    const cursorIdQueryString = firstPage ? '' : `&cursorId=${cursorId}`;

    const res = await fetchExtend.get(`/stores?${cursorIdQueryString}`);

    const { success, result, code, message }: ResultResponse<IAllStoresType> = await res.json();
    if (!res.ok || !success) {
      throwApiError({ code, message });
    }
    return result;
  };
  const getNextPageParam: GetNextPageParamFunction<number, IAllStoresType> = (lastPage) => {
    if (!lastPage.hasNext) return undefined;
    return lastPage.nextCursor;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: -1,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    select: ({ pages }) => {
      const stores = pages.map((page) => page.content).flat();
      return { stores };
    }
  });
};
