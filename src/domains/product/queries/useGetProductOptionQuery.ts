import { useQuery } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import productService from './service';

const useGetProductOptionQuery = (productId: number) => {
  const queryKey = productQueryKey.detail(productId, 'product-option');
  const queryFn = () => productService.getProductOption(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetProductOptionQuery;
