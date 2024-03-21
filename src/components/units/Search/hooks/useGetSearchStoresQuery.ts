import { useInfiniteQuery } from '@tanstack/react-query';
import { getSearchStores } from '@/components/units/Search/api/getSearchStores';

interface UseGetSearchStoresQueryProps {
  keyword: string;
}

export const useGetSearchStoresQuery = ({ keyword }: UseGetSearchStoresQueryProps) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['searchStores', keyword],
    queryFn: ({ pageParam }: { pageParam: number }) => getSearchStores({ keyword, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.existNextPage ? lastPageParam + 1 : undefined;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const stores = data?.pages.map(page => page.content).flat();
  const itemCount = data?.pages[0]?.itemAllCount || 0;

  return { stores, itemCount, ...rest };
};
