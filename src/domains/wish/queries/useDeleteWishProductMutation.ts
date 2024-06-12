import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { IProductType } from '@/domains/product/types/productType';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { Cursor } from '@/shared/types/response';
import { productQueryKey } from '@/shared/queries/queryKey';
import wishService from './service';
import { wishQueryKey } from './queryKey';
import { updateInfiniteQueryCache } from '../../../shared/utils/queryCache';

const useDeleteWishProductMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async ({ productId }: { productId: number }) => {
    await wishService.deleteWishProduct({ productId });
    return { productId };
  };

  const onMutate = ({ productId }: { productId: number }) => {
    queryClient.setQueriesData<InfiniteData<Cursor<IProductType[]>>>(
      { queryKey: productQueryKey.all },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { key: 'boardId', value: productId }, { isWished: false })
    );
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });
    openToast({ message: '💖 찜 해제 되었어요' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError, onMutate });
};

export default useDeleteWishProductMutation;
