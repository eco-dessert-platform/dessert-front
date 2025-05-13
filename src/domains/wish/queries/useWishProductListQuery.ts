import { infiniteQueryOptions, keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { productQueryKey } from '@/shared/queries/queryKey';
import wishService from './service';

type Params = Omit<Parameters<typeof wishService.getWishProductList>[0], 'cursorId'>;

export const wishProductListoptions = ({ folderId, sort }: Params) =>
  infiniteQueryOptions({
    queryKey: productQueryKey.list({ type: 'wish', folderId, sort }),
    queryFn: ({ pageParam }) =>
      wishService.getWishProductList({ cursorId: pageParam, folderId, sort }),
    initialPageParam: INITIAL_CURSOR,
    getNextPageParam: ({ hasNext, nextCursor }) => (hasNext ? nextCursor : undefined),
    select: ({ pages }) => pages.map(({ content }) => content).flat(),
    placeholderData: keepPreviousData
  });

const useWishProductListQuery = (params: Params) =>
  useInfiniteQuery(wishProductListoptions(params));

export default useWishProductListQuery;
