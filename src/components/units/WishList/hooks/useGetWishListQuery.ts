import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { WishListFolder } from '../types';

const getWishList = async () => {
  const data: WishListFolder[] = await API.get('/wishLists');
  return data;
};

export const useGetWishListQuery = () => {
  return useQuery({
    queryKey: ['wishlists'],
    queryFn: getWishList
  });
};
