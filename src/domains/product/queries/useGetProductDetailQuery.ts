import QUERY_KEY from '@/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

import productService from './service';

const useGetProductOptionQuery = (productId: string) => {
  const queryKey = [QUERY_KEY.productDetail];
  const queryFn = () => productService.getProductOption(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetProductOptionQuery;
