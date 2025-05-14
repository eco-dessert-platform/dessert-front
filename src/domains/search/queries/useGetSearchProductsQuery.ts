import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { IFilterType } from '@/domains/product/types/filterType';
import searchService from '@/domains/search/queries/service';
import { productQueryKey } from '@/shared/queries/queryKey';
import { IResponse } from '@/shared/types/response';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';

interface QueryHookProps {
  keyword: string;
  filterValue: IFilterType;
}

export const useGetSearchProductsQuery = ({ keyword, filterValue }: QueryHookProps) => {
  const queryKey = [...productQueryKey.list('search'), { filter: filterValue, keyword }];

  const queryFn = async ({ pageParam }: { pageParam: number }): Promise<IResponse> => {
    const result = await searchService.getSearchProducts({
      keyword,
      filterValue,
      cursorId: pageParam
    });
    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IResponse> = (lastPage) => {
    const result = lastPage.hasNext ? lastPage.nextCursor : undefined;
    return result;
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
      const boardsCount = pages[0]?.totalCount || 0;
      return { products, boardsCount };
    }
  });
};
