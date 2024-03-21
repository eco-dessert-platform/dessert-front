import API from '@/api/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface WishData {
  borderId: number | undefined;
}

interface WishListReturn {
  message: string;
}

const addWish = async (data: WishData): Promise<AxiosResponse<WishListReturn>> => {
  console.log(data);
  return API.post(`/boards/${data.borderId}/wish`, data.data);
};

export const useAddWishMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['wishAdd'],
    mutationFn: addWish,
    onSuccess: () => {
      queryClient.invalidateQueries();
    }
  });
};
