import { IAllStoresType } from '@/domains/store/types/allStoresType';
import { storeQueryKey } from '@/shared/queries/queryKey';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';
import storeService from '@/domains/store/queries/service';

export const useGetAllStoresQuery = () => {
  const queryKey = storeQueryKey.list('main');

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const data = await storeService.getAllStores(cursorId);
    return data;
  };

  const initialPageParam = INITIAL_CURSOR;

  const getNextPageParam: GetNextPageParamFunction<number, IAllStoresType> = (lastPage) => {
    if (!lastPage.hasNext) return undefined;
    return lastPage.nextCursor;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam,
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
