import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWishStore } from '@/components/units/(main)/Stores/api/deleteWishStore';

export const useDeleteWishStoreMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['wishStoreDelete'],
    mutationFn: deleteWishStore,
    onSuccess: () => {
      queryClient.invalidateQueries();
    }
  });
};
