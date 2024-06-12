import QUERY_KEY from '@/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

import productService from './service';

const useGetProductDetailQuery = (productId: string) => {
  const queryKey = [QUERY_KEY.productDetail];
  const queryFn = () => productService.getProductDetail(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetProductDetailQuery;
