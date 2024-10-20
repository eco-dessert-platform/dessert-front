/**
 * @deprecated 임시로 사용하는 api입니다. 데이터팀에서 데이터 분석 후 삭제 예정
 */

import productService from '@/domains/product/queries/service';
import { IProductType } from '@/domains/product/types/productType';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { productQueryKey } from '@/shared/queries/queryKey';
import { Cursor } from '@/shared/types/response';
import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';

export const useGetProductsRandomQuery = () => {
  const queryKey = [...productQueryKey.lists()];

  const queryFn = async ({ pageParam: cursorId }: { pageParam: number }) => {
    const result = await productService.getProductsRandom({ cursorId });
    return result;
  };

  const getNextPageParam: GetNextPageParamFunction<number, Cursor<Array<IProductType>>> = (
    lastPage
  ) => {
    if (!lastPage.hasNext) return undefined;
    return lastPage.nextCursor;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: INITIAL_CURSOR,
    getNextPageParam,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: ({ pages }) => {
      const products = pages.map((page) => page.content).flat();
      const totalCount = pages.reduce((acc, page) => acc + page.content.length, 0);

      return { products, totalCount };
    }
  });
};
