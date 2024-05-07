import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';
import { IStoreType } from '@/domains/store/types/store';
import QUERY_KEY from '@/shared/constants/queryKey';
import { Cursor } from '@/shared/types/response';
import wishService from './service';

const useWishStoreListQuery = () => {
  const queryKey = [QUERY_KEY.store];

  const queryFn = async ({ pageParam }: { pageParam: number }) =>
    wishService.getWishStoreList(pageParam);

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<IStoreType>> = (lastPage) =>
    lastPage.hasNext ? lastPage.nextCursor : undefined;

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 1,
    getNextPageParam,
    select: ({ pages }) => pages.flatMap(({ content }) => content)
  });
};

export default useWishStoreListQuery;
