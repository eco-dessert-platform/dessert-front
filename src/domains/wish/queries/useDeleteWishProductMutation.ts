import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { IProductType } from '@/domains/product/types/productType';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { Cursor } from '@/shared/types/response';
import { productQueryKey, storeQueryKey } from '@/shared/queries/queryKey';
import { IStoreBestProductType } from '@/domains/store/types/store';
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
    queryClient.setQueriesData<Array<IStoreBestProductType>>(
      {
        queryKey: storeQueryKey.details(),
        predicate: (query) => query.queryKey[3] === 'best-products'
      },
      (oldData) =>
        oldData?.map((data) => (data.boardId === productId ? { ...data, isWished: false } : data))
    );
    queryClient.setQueriesData<InfiniteData<Cursor<IProductType[]>>>(
      {
        queryKey: storeQueryKey.details(),
        predicate: (query) => query.queryKey[3] === 'all-products'
      },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { key: 'boardId', value: productId }, { isWished: false })
    );
    return { productId };
  };

  const onSuccess = ({ productId }: { productId: number }) => {
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });
    queryClient.invalidateQueries({ queryKey: productQueryKey.detail(productId) });
    openToast({ message: '💖 찜 해제 되었어요' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError, onMutate });
};

export default useDeleteWishProductMutation;
