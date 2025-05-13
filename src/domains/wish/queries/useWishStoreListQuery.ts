import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';
import { IStoreType } from '@/domains/store/types/store';
import { Cursor } from '@/shared/types/response';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { storeQueryKey } from '@/shared/queries/queryKey';
import wishService from './service';

const useWishStoreListQuery = () => {
  const queryKey = storeQueryKey.list('wish');

  const queryFn = ({ pageParam }: { pageParam: number }) => wishService.getWishStoreList(pageParam);

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<IStoreType>> = (lastPage) =>
    lastPage.hasNext ? lastPage.nextCursor : undefined;

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: INITIAL_CURSOR,
    getNextPageParam,
    select: ({ pages }) => pages.flatMap(({ content }) => content)
  });
};

export default useWishStoreListQuery;
