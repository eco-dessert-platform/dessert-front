import API from '@/api';
import { IAllStoresType } from '@/components/units/(main)/types';

interface GetAllStoresProps {
  pageParam: number;
}

export const getAllStores = async ({ pageParam }: GetAllStoresProps): Promise<IAllStoresType> => {
  const data: IAllStoresType = await API.get(`/stores?page=${pageParam}`);
  return data;
};
