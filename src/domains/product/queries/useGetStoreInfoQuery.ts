import { useQuery } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import productService from './service';

interface Props {
  productId: string;
}

const useGetStoreInfoQuery = ({ productId }: Props) => {
  const queryKey = productQueryKey.detail(Number(productId), 'store-info');
  const queryFn = () => productService.getStoreInfo(productId);

  return useQuery({ queryKey, queryFn });
};

export default useGetStoreInfoQuery;
