import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { storeQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { Cursor } from '@/shared/types/response';
import { IStoreProductType } from '@/domains/store/types/store';

interface Props {
  storeId: number;
}

export const useGetStoreAllProductsQuery = ({ storeId }: Props) => {
  const queryKey = storeQueryKey.detail(storeId, 'all-products');

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const data = await storeService.getStoreAllProducts(storeId, cursorId);
    return data;
  };

  const initialPageParam = INITIAL_CURSOR;

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<Array<IStoreProductType>>> = ({
    hasNext,
    nextCursor
  }) => {
    const nextPageParam = hasNext ? nextCursor : undefined;
    return nextPageParam;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam,
    getNextPageParam,
    select: ({ pages }) => {
      const products = pages.flatMap((page) => page.content);
      return products;
    }
  });
};
