import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { WishListFolder } from '../types';

const getWishListFolder = async (): Promise<WishListFolder[]> => {
  const data: WishListFolder[] = await API.get('/wishLists');
  return data;
};

export const useGetWishListFolder = () => {
  return useQuery<WishListFolder[], Error>({
    queryKey: ['wishlists'],
    queryFn: getWishListFolder
  });
};
