import { useInfiniteQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IWishProductList } from '@/components/units/WishListDetail/types';

const SIZE = 10;

const getWishProductList = async (pageParam: number, folderId: number, sort: string) => {
  const { data } = await API.get<IWishProductList>(
    `/boards/folders/${folderId}?sort=${sort}&page=${pageParam}&size=${SIZE}`
  );
  return data;
};

export const useWishProductListQuery = (folderId: number, sort: string) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['wishProductList', folderId, sort],
    queryFn: ({ pageParam = 0 }: { pageParam: number }) =>
      getWishProductList(pageParam, folderId, sort),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.last ? undefined : lastPageParam + 1;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const wishProductList = data?.pages.map(page => page.content).flat();

  return { wishProductList, ...rest };
};
