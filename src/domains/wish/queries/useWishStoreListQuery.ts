import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';
import { IStoreType } from '@/domains/store/types/store';
import { storeQueryKey } from '@/domains/store/queries/queryKey';
import { Cursor } from '@/shared/types/response';
import { INITIAL_CORSOR } from '@/shared/constants/corsor';
import wishService from './service';

const useWishStoreListQuery = () => {
  const queryKey = storeQueryKey.list('wish');

  const queryFn = ({ pageParam }: { pageParam: number }) => wishService.getWishStoreList(pageParam);

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<IStoreType>> = (lastPage) =>
    lastPage.hasNext ? lastPage.nextCursor : undefined;

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: INITIAL_CORSOR,
    getNextPageParam,
    select: ({ pages }) => pages.flatMap(({ content }) => content)
  });
};

export default useWishStoreListQuery;
