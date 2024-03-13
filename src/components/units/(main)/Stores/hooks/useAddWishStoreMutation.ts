import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addWishStore } from '../api/addWishStore';

export const useAddWishStoreMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['wishStoreAdd'],
    mutationFn: addWishStore,
    onSuccess: () => {
      queryClient.invalidateQueries();
    }
  });
};
