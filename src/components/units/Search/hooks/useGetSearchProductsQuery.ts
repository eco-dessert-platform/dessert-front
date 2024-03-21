import { useInfiniteQuery } from '@tanstack/react-query';
import { IFilterType } from '@/components/units/(main)/Products/types';
import { getSearchProducts } from '@/components/units/Search/api/getSearchProducts';

interface UseGetSearchProductsQueryProps {
  keyword: string;
  filterValue: IFilterType;
}

export const useGetSearchProductsQuery = ({
  keyword,
  filterValue
}: UseGetSearchProductsQueryProps) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['searchProducts', keyword, filterValue],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getSearchProducts({ keyword, filterValue, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.existNextPage ? lastPageParam + 1 : undefined;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });

  const products = data?.pages.map(page => page.content).flat();
  const itemCount = data?.pages[0]?.itemAllCount || 0;

  return { products, itemCount, ...rest };
};
