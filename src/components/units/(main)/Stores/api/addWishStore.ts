import API from '@/api';
import { WishStoreListReturn } from '../../types';

export const addWishStore = async (storeId: number) => {
  const data: WishStoreListReturn = await API.post(`/likes/store/${String(storeId)}`);
  return data;
};
