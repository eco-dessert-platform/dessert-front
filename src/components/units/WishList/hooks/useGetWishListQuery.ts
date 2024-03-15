import { useQuery } from '@tanstack/react-query';
import API from '@/api';
import { WishListFolder } from '../types';
// import { useRecoilValue } from 'recoil';
// import { accessTokenState } from '@/atoms/atom';

const getWishList = async () => {
  // const getWishList = async (accessToken: string) => {
  const data: WishListFolder[] = await API.get('/wishLists'); // accessToken 값도 같이 넘겨줌
  return data;
};

export const useGetWishListQuery = () => {
  // const accessToken = useRecoilValue(accessTokenState);

  return useQuery({
    queryKey: ['wishlists'],
    queryFn: getWishList // () => getWishList(accessToken)
  });
};
