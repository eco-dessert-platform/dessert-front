import { useQuery } from '@tanstack/react-query';
import { similarQueryKey } from '@/shared/queries/queryKey';
import productService from './service';

const useGetSimilarProductsQuery = (productId: number) => {
  const queryKey = similarQueryKey.similar(productId);
  const queryFn = () => productService.getSimilarProducts(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetSimilarProductsQuery;
