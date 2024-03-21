import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { IStoreDetailType } from '../types';

const getStoreDetail = async (id: number): Promise<IStoreDetailType> => {
  const data: IStoreDetailType = await API.get(`/stores/${id}`);
  return data;
};

export const useGetStoreDetialQuery = (id: number) => {
  return useQuery<IStoreDetailType, Error>({
    queryKey: ['products'],
    queryFn: () => getStoreDetail(id)
  });
};
