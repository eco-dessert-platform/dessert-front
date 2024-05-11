import { ResultResponse } from '@/shared/types/response';
import fetchExtend from '@/shared/utils/api';
import { throwApiError } from '@/shared/utils/error';
import { useQuery } from '@tanstack/react-query';

import { IStoreDetailAllType } from '../types/storeDetailType';

const getStoreDetailAll = async (id: number) => {
  const res = await fetchExtend.get(`/stores/${id}/boards/all?page=0`);
  if (!res.ok) throw new Error('상품 상세 조회 실패');
  const { success, result, code, message }: ResultResponse<IStoreDetailAllType> = await res.json();
  if (!res.ok || !success) {
    throwApiError({ code, message });
  }
  return result;
};

export const useGetStoreDetailAllQuery = (id: number) =>
  useQuery<IStoreDetailAllType, Error>({
    queryKey: ['products_all'],
    queryFn: () => getStoreDetailAll(id)
  });
