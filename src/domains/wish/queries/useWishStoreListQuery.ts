import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { WishStoreList } from '../types/wishStore';

const useWishStoreListQuery = () => {
  const { folderId } = useParams<{ folderId: string }>();

  const queryKey = [QUERY_KEY.wishProducts, folderId];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetchExtend.get(`/likes/stores?page=${pageParam}&size=10`);
    if (!res.ok) throw new Error('위시 스토어 조회 오류');
    const data: WishStoreList = await res.json();
    return data;
  };

  const getNextPageParam: GetNextPageParamFunction<number, WishStoreList> = (
    lastPage,
    _,
    lastPageParam
  ) => (lastPage.nextPage ? undefined : lastPageParam + 1);

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
    select: ({ pages }) =>
      pages
        .map(({ content }) => content)
        .filter((value) => value !== undefined)
        .flat()
  });
};

export default useWishStoreListQuery;
