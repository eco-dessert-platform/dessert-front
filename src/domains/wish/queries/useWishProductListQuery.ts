import { useInfiniteQuery } from '@tanstack/react-query';
import { INITIAL_CORSOR } from '@/shared/constants/corsor';
import { productQueryKey } from '@/shared/queries/queryKey';
import wishService from './service';

const useWishProductListQuery = (folderId: string) =>
  useInfiniteQuery({
    queryKey: productQueryKey.list('wish'),
    queryFn: ({ pageParam }) => wishService.getWishProductList({ cursor: pageParam, folderId }),
    initialPageParam: INITIAL_CORSOR,
    getNextPageParam: ({ hasNext, nextCursor }) => (hasNext ? nextCursor : undefined),
    select: ({ pages }) => pages.map(({ content }) => content).flat()
  });

export default useWishProductListQuery;
