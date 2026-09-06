import { useQuery } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import productService from './service';

const useGetProductOptionStatusQuery = (productId: number) => {
  const queryKey = productQueryKey.detail(productId, 'product-option-status');
  const queryFn = () => productService.getProductOptionStatus(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetProductOptionStatusQuery;
