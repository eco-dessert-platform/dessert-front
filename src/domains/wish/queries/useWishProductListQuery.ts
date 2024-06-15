import { useInfiniteQuery } from '@tanstack/react-query';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { productQueryKey } from '@/shared/queries/queryKey';
import wishService from './service';

const useWishProductListQuery = (folderId: number) =>
  useInfiniteQuery({
    queryKey: productQueryKey.list('wish'),
    queryFn: ({ pageParam }) => wishService.getWishProductList({ cursorId: pageParam, folderId }),
    initialPageParam: INITIAL_CURSOR,
    getNextPageParam: ({ hasNext, nextCursor }) => (hasNext ? nextCursor : undefined),
    select: ({ pages }) => pages.map(({ content }) => content).flat()
  });

export default useWishProductListQuery;
