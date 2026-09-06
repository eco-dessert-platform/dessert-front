import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { ChangeCartOptionRequest } from '../types/cart';
import { cartQueryKey } from './queryKey';
import cartService from './service';

const useChangeCartOptionMutation = () => {
  const queryClient = useQueryClient();
  const { openToast } = useToastNewVer();

  return useMutation({
    mutationFn: ({
      cartOptionId,
      request
    }: {
      cartOptionId: number;
      request: ChangeCartOptionRequest;
    }) => cartService.changeCartOption(cartOptionId, request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: cartQueryKey.lists() }),
    onError: ({ message }: Error) => openToast({ message })
  });
};

export default useChangeCartOptionMutation;
