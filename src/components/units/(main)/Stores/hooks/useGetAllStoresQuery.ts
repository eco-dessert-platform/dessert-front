import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllStores } from '../api/getAllStores';

export const useGetAllStoresQuery = () => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['stores'],
    queryFn: ({ pageParam }: { pageParam: number }) => getAllStores({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.last ? undefined : lastPageParam + 1;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const stores = data?.pages.map(page => page.content).flat();
  const itemCount = data?.pages[0]?.numberOfElements || 0;

  return { stores, itemCount, ...rest };
};
