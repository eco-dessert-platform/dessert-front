import { useQuery } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';

import productService from './service';

const useGetBoardDetailQuery = (productId: number) => {
  const queryKey = productQueryKey.detail(productId, 'product-info');
  const queryFn = () => productService.getProductInfo(productId);

  return useQuery({
    queryKey,
    queryFn,
    select: (data) => ({ ...data.board, ...data.store })
  });
};

export default useGetBoardDetailQuery;
