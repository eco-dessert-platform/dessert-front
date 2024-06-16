import QUERY_KEY from '@/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

import productService from './service';

interface Props {
  productId: string;
}

const useGetStoreInfoQuery = ({ productId }: Props) => {
  const queryKey = [QUERY_KEY.productDetailStoreInfo];
  const queryFn = () => productService.getStoreInfo(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetStoreInfoQuery;
