import { useQuery } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';

import productService from './service';

const useGetBoardDetailQuery = (productId: number) => {
  const queryKey = productQueryKey.detail(productId, 'board-detail');
  const queryFn = () => productService.getBoardDetail(productId);

  return useQuery({
    queryKey,
    queryFn
  });
};

export default useGetBoardDetailQuery;
