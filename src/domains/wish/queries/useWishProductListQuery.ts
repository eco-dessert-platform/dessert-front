import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';
import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import { WishProductsDetail } from '../types/wishFolder';

const useWishProductListQuery = (folderId: string) => {
  const queryKey = [QUERY_KEY.wishProducts, folderId];

  const queryFn = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetchExtend.get(`/boards/folders/${folderId}?page=${pageParam}`);
    const { result, code, message, success }: ResultResponse<WishProductsDetail> = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, WishProductsDetail> = (
    lastPage,
    _,
    lastPageParam
  ) => (lastPage.last ? undefined : lastPageParam + 1);

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
    select: ({ pages }) => pages.map(({ content }) => content).flat()
  });
};

export default useWishProductListQuery;
