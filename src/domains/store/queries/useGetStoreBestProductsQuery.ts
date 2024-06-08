import { useQuery } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';

interface Props {
  storeId: number;
}

export const useGetStoreBestProductsQuery = ({ storeId }: Props) => {
  const queryKey = productQueryKey.list('store-detail/best');

  const queryFn = async () => {
    const data = await storeService.getStoreBestProducts(storeId);
    return data;
  };

  return useQuery({ queryKey, queryFn });
};
