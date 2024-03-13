import { useMutation } from '@tanstack/react-query';
import { deleteWishStore } from '@/components/units/(main)/Stores/api/deleteWishStore';

export const useDeleteWishStoreMutation = () => {
  return useMutation({
    mutationKey: ['wishStoreDelete'],
    mutationFn: deleteWishStore
  });
};
