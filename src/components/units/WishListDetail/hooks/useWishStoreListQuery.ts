import { useInfiniteQuery } from '@tanstack/react-query';
import API from '@/api';
import { IWishStoreList } from '@/components/units/WishListDetail/types';

const SIZE = 10;

const getWishStoreList = async ({ pageParam }: { pageParam: number }) => {
  const result = await API.get(`/likes/stores?size=${SIZE}&page=${pageParam}`);
  console.log(result);
  return result as IWishStoreList;
};

export const useWishStoreListQuery = () => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['wishStoreList'],
    queryFn: ({ pageParam = 0 }: { pageParam: number }) => getWishStoreList({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      console.log(lastPage);
      const nextPageParam = lastPage.lastPage === lastPageParam - 1 ? undefined : lastPageParam + 1;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const wishStoreList = data?.pages.map(page => page.contents).flat();

  return { wishStoreList, ...rest };
};
