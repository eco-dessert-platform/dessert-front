import { useQuery } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';

import productService from './service';

const useGetProductOptionQuery = (productId: string) => {
  const queryKey = productQueryKey.detail(Number(productId), 'product-option');
  const queryFn = () => productService.getProductOption(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetProductOptionQuery;
