import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { UpdateCartOptionRequest } from '../types/cart';
import { cartQueryKey } from './queryKey';
import cartService from './service';

const useUpdateCartOptionMutation = () => {
  const queryClient = useQueryClient();
  const { openToast } = useToastNewVer();

  return useMutation({
    mutationFn: ({
      cartOptionId,
      request
    }: {
      cartOptionId: number;
      request: UpdateCartOptionRequest;
    }) => cartService.updateCartOption(cartOptionId, request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: cartQueryKey.lists() }),
    onError: ({ message }: Error) => openToast({ message })
  });
};

export default useUpdateCartOptionMutation;
