import { useInfiniteQuery, GetNextPageParamFunction } from '@tanstack/react-query';
import { IFilterType } from '@/domains/product/types/filterType';
import { IAllProductsType } from '@/domains/search/types';
import searchService from '@/domains/search/queries/service';
import { productQueryKey } from '@/shared/queries/queryKey';

interface QueryHookProps {
  keyword: string;
  filterValue: IFilterType;
}

export const useGetSearchProductsQuery = ({ keyword, filterValue }: QueryHookProps) => {
  const queryKey = [...productQueryKey.list('search'), { filter: filterValue, keyword }];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const result = await searchService.getSearchProducts({ keyword, filterValue, pageParam });
    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, IAllProductsType> = (
    lastPage,
    __,
    lastPageParam
  ) => {
    const nextPageParam = lastPage.existNextPage ? lastPageParam + 1 : undefined;
    return nextPageParam;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: ({ pages }) => {
      const products = pages.map((page) => page.content).flat();
      const itemCount = pages[0]?.itemAllCount || 0;
      return { products, itemCount };
    }
  });
};
