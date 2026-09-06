import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { DeleteCartOptionsRequest } from '../types/cart';
import { cartQueryKey } from './queryKey';
import cartService from './service';

const useDeleteCartOptionsMutation = () => {
  const queryClient = useQueryClient();
  const { openToast } = useToastNewVer();

  return useMutation({
    mutationFn: (request: DeleteCartOptionsRequest) => cartService.deleteCartOptions(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartQueryKey.lists() });
      openToast({ message: '장바구니에서 상품을 삭제했어요.' });
    },
    onError: ({ message }: Error) => openToast({ message })
  });
};

export default useDeleteCartOptionsMutation;
