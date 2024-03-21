import API from '@/api';
import { useMutation } from '@tanstack/react-query';

interface WishListData {
  folderId: number;
  data: {
    title: string;
  };
}

interface WishListReturn {
  message: string;
}

const updateWishList = async (wishList: WishListData): Promise<WishListReturn> => {
  const data: WishListReturn = await API.patch(`/wishLists/${wishList.folderId}`, {
    body: JSON.stringify(wishList.data)
  });
  return data;
};

export const useUpdateWishListMutation = () => {
  return useMutation({
    mutationKey: ['updateWish'],
    mutationFn: updateWishList
  });
};
