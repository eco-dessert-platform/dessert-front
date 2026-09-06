import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { AddCartRequest } from '../types/cart';
import { cartQueryKey } from './queryKey';
import cartService from './service';

const useAddCartMutation = () => {
  const queryClient = useQueryClient();
  const { openToast } = useToastNewVer();

  return useMutation({
    mutationFn: (request: AddCartRequest) => cartService.addCart(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartQueryKey.lists() });
      openToast({ message: '장바구니에 상품을 추가했어요.' });
    },
    onError: ({ message }: Error) => openToast({ message })
  });
};

export default useAddCartMutation;
