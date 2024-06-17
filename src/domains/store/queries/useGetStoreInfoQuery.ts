import { useQuery } from '@tanstack/react-query';
import { storeQueryKey } from '@/shared/queries/queryKey';
import storeService from '@/domains/store/queries/service';

interface Props {
  storeId: number;
}

export const useGetStoreInfoQuery = ({ storeId }: Props) => {
  const queryKey = storeQueryKey.detail(storeId);

  const queryFn = async () => {
    const data = await storeService.getStoreInfo(storeId);
    return data;
  };

  return useQuery({ queryKey, queryFn });
};
