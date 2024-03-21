import { useInfiniteQuery } from '@tanstack/react-query';
import { IFilterType } from '@/components/units/(main)/Products/types';
import { getAllProducts } from '../api/getAllProducts';

export const useGetAllProductsQuery = (query: IFilterType) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['products', query],
    queryFn: ({ pageParam }: { pageParam: number }) => getAllProducts({ query, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.last ? undefined : lastPageParam + 1;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });

  const products = data?.pages.map(page => page.content).flat();
  const itemCount = data?.pages[0]?.numberOfElements || 0;

  return { products, itemCount, ...rest };
};
