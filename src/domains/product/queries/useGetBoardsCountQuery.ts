import productService from '@/domains/product/queries/service';
import { IFilterType } from '@/domains/product/types/filterType';
import { productQueryKey } from '@/shared/queries/queryKey';
import { useQuery } from '@tanstack/react-query';

export const useGetBoardsCountQuery = (query: IFilterType) => {
  const queryKey = [productQueryKey.count, query];

  const queryFn = async () => {
    const result = await productService.getBoardsCount({ filterValue: query });
    return result;
  };

  return useQuery({ queryKey, queryFn });
};
