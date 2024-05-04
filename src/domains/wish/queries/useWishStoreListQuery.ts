import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';

import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

import { WishStoreList } from '../types/wishStore';

const useWishStoreListQuery = () => {
  const queryKey = [QUERY_KEY.store];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetchExtend.get(`/likes/stores?page=${pageParam}&size=10`);
    const { result, success, code, message }: ResultResponse<WishStoreList> = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
    return result;
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
        .map(({ contents }) => contents)
        .filter((value) => value !== undefined)
        .flat()
  });
};

export default useWishStoreListQuery;
