import * as API from '@/api/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface WishListReturn {
  message: string;
}

const deleteWish = async (boardId: number): Promise<AxiosResponse<WishListReturn>> => {
  return API.put(`/boards/${boardId}/wish`, null);
};

export const useDeleteWishMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['wishDelete'],
    mutationFn: deleteWish,
    onSuccess: () => {
      queryClient.invalidateQueries();
    }
  });
};
