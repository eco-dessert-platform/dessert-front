import { useQuery } from '@tanstack/react-query';
import fetchExtend from '@/shared/utils/api';
import { IStoreDetailAllType } from '../types/storeDetailType';

const getStoreDetailAll = async (id: number) => {
  const res = await fetchExtend.get(`/stores/${id}/boards/all?page=0`);
  if (!res.ok) throw new Error('상품 상세 조회 실패');
  const data: IStoreDetailAllType = await res.json();
  return data;
};

export const useGetStoreDetailAllQuery = (id: number) =>
  useQuery<IStoreDetailAllType, Error>({
    queryKey: ['products_all'],
    queryFn: () => getStoreDetailAll(id)
  });
