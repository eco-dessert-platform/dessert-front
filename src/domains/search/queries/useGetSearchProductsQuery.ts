import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { IFilterType } from '@/domains/product/types/filterType';
import { IAllProductsType } from '@/domains/search/types';
import searchService from '@/domains/search/queries/service';
import { productQueryKey } from '@/shared/queries/queryKey';
import { Cursor } from '@/shared/types/response';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';

interface QueryHookProps {
  keyword: string;
  filterValue: IFilterType;
}

export const useGetSearchProductsQuery = ({ keyword, filterValue }: QueryHookProps) => {
  const queryKey = [...productQueryKey.list('search'), { filter: filterValue, keyword }];

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const result = await searchService.getSearchProducts({ keyword, filterValue, cursorId });
    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<IAllProductsType>> = (
    lastPage
  ) => {
    const nextPageParam = lastPage.hasNext ? lastPage.nextCursor : undefined;
    return nextPageParam;
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
      const products = pages.map((page) => page.content.boards).flat();
      const boardsCount = pages[0]?.content.itemAllCount || 0;
      return { products, boardsCount };
    }
  });
};
