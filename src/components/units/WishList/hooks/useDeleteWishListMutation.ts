import API from '@/api';
import { useMutation } from '@tanstack/react-query';

interface WishListData {
  folderId: number;
}

interface WishListReturn {
  message: string;
}

const deleteWishList = async (wishList: WishListData): Promise<WishListReturn> => {
  const data: WishListReturn = await API.delete(`/wishLists/${wishList.folderId}`);
  return data;
};

export const useDeleteWishListMutation = () => {
  return useMutation({
    mutationKey: ['deleteWish'],
    mutationFn: deleteWishList
  });
};
