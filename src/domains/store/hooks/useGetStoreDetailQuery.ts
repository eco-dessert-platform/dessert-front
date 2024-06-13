import { useQuery } from '@tanstack/react-query';
import fetchExtend from '@/shared/utils/api';
import { IStoreDetailType } from '../types/storeDetailType';

const getStoreDetail = async (id: number): Promise<IStoreDetailType> => {
  const res = await fetchExtend.get(`/stores/${id}`);
  if (!res.ok) throw new Error('상품 상세 조회 실패');
  const data: IStoreDetailType = await res.json();
  return data;
};

export const useGetStoreDetailQuery = (id: number) =>
  useQuery<IStoreDetailType, Error>({
    queryKey: ['products'],
    queryFn: () => getStoreDetail(id)
  });
