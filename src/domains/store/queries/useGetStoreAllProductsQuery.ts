import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { Cursor } from '@/shared/types/response';
import { IProductType } from '@/domains/product/types/productType';

interface Props {
  storeId: number;
}

export const useGetStoreAllProductsQuery = ({ storeId }: Props) => {
  const queryKey = productQueryKey.list('store-detail/all');

  const queryFn = async () => {
    const data = await storeService.getStoreAllProducts(storeId);
    return data;
  };

  const initialPageParam = INITIAL_CURSOR;

  const getNextPageParam: GetNextPageParamFunction<
    number,
    Cursor<Array<Omit<IProductType, 'storeName'>>>
  > = ({ hasNext, nextCursor }) => {
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
