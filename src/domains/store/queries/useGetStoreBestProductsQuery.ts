import { useQuery } from '@tanstack/react-query';
import { storeQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';

interface Props {
  storeId: number;
}

export const useGetStoreBestProductsQuery = ({ storeId }: Props) => {
  const queryKey = storeQueryKey.detail(storeId, 'best-products');

  const queryFn = async () => {
    const data = await storeService.getStoreBestProducts(storeId);
    return data;
  };

  return useQuery({ queryKey, queryFn });
};
