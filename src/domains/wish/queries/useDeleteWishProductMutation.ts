import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { IProductType } from '@/domains/product/types/productType';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { Cursor } from '@/shared/types/response';
import { productQueryKey } from '@/shared/queries/queryKey';
import wishService from './service';
import { wishQueryKey } from './queryKey';
import { updateInfiniteQueryCache } from './common/updater';

const useDeleteWishProductMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async ({ productId }: { productId: number }) => {
    await wishService.deleteWishProduct({ productId });
    return { productId };
  };

  const onSuccess = ({ productId }: { productId: number }) => {
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });
    queryClient.setQueriesData<InfiniteData<Cursor<IProductType[]>>>(
      { queryKey: productQueryKey.all },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { key: 'boardId', value: productId }, { isWished: false })
    );
    openToast({ message: '💖 찜 해제 되었어요' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useDeleteWishProductMutation;
