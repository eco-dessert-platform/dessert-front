import { useRecoilValue } from 'recoil';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';
import { isLoggedinState } from '@/shared/atoms/login';
import { Cursor } from '@/shared/types/response';
import { productQueryKey } from '@/shared/queries/queryKey';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { IProductType } from '@/domains/product/types/productType';
import { IFilterType } from '@/domains/product/types/filterType';
import productService from '@/domains/product/queries/service';

export const useGetAllProductsQuery = (query: IFilterType) => {
  const isLoggedIn = useRecoilValue(isLoggedinState);
  const queryKey = [...productQueryKey.list('home'), { filter: query, recommended: isLoggedIn }];

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const result = await productService.getAllProducts({ cursorId, filterValue: query });
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
      return { products };
    }
  });
};
