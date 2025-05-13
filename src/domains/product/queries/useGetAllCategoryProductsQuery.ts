import productService from '@/domains/product/queries/service';
import { IFilterType } from '@/domains/product/types/filterType';
import { IProductType } from '@/domains/product/types/productType';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { productQueryKey } from '@/shared/queries/queryKey';
import { Cursor } from '@/shared/types/response';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';

export const useGetAllCategoryProductsQuery = (query: IFilterType) => {
  const queryKey = [...productQueryKey.lists(), { filter: query }];

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const result = await productService.getAllCategoryProducts({ cursorId, filterValue: query });
    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<Array<IProductType>>> = (
    lastPage
  ) => {
    if (!lastPage.hasNext) return undefined;
    return lastPage.nextCursor;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: INITIAL_CURSOR,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: ({ pages }) => {
      const products = pages.map((page) => page.content).flat();
      const totalCount = pages.reduce((acc, page) => acc + page.content.length, 0);

      return { products, totalCount };
    }
  });
};
