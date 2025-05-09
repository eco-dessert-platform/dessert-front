import productService from '@/domains/product/queries/service';
import { IFilterType } from '@/domains/product/types/filterType';
import { useQuery } from '@tanstack/react-query';

export const useGetBoardsCountQuery = (query: Omit<IFilterType, 'sort'>) => {
  const queryKey = ['main', 'boards-count', { filter: query }];

  const queryFn = async () => {
    const result = await productService.getBoardsCount({ filterValue: query });
    return result;
  };

  return useQuery({ queryKey, queryFn });
};
