import { ResultResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';
import { useQuery } from '@tanstack/react-query';

import { IStoreDetailType } from '../types/storeDetailType';

const getStoreDetail = async (id: number): Promise<IStoreDetailType> => {
  const res = await fetchExtend.get(`/stores/${id}`);
  const { success, result, code, message }: ResultResponse<IStoreDetailType> = await res.json();
  if (!res.ok || !success) {
    throwApiError({ code, message });
  }
  return result;
};

export const useGetStoreDetailQuery = (id: number) =>
  useQuery<IStoreDetailType, Error>({
    queryKey: ['products'],
    queryFn: () => getStoreDetail(id)
  });
