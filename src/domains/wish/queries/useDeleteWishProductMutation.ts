import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { IProductType } from '@/domains/product/types/productType';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { Cursor } from '@/shared/types/response';
import { productQueryKey, storeQueryKey } from '@/shared/queries/queryKey';
import { IStoreProductType } from '@/domains/store/types/store';
import { useRecoilValue } from 'recoil';
import wishService from './service';
import { wishQueryKey } from './queryKey';
import { updateInfiniteQueryCache } from '../../../shared/utils/queryCache';
import { wishSortDictionary } from '../constants';
import { wishProductSortState } from '../atoms/sort';

const useDeleteWishProductMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const sortOptionKr = useRecoilValue(wishProductSortState);
  const sortOptionEng = wishSortDictionary.translate(sortOptionKr);

  const mutationFn = async ({ productId }: { productId: number }) => {
    await wishService.deleteWishProduct({ productId });
    return { productId };
  };

  const onMutate = ({ productId }: { productId: number }) => {
    queryClient.setQueriesData<InfiniteData<Cursor<IProductType[]>>>(
      { queryKey: productQueryKey.all },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { key: 'boardId', value: productId }, (oldItem) => ({
          ...oldItem,
          isWished: false
        }))
    );
    queryClient.setQueriesData<Array<IStoreProductType>>(
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
        updateInfiniteQueryCache(oldData, { key: 'boardId', value: productId }, (oldItem) => ({
          ...oldItem,
          isWished: false
        }))
    );
    return { productId };
  };

  const onSuccess = ({ productId }: { productId: number }) => {
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });
    queryClient.invalidateQueries({ queryKey: productQueryKey.detail(productId) });
    queryClient.invalidateQueries({
      queryKey: productQueryKey.list({ type: 'wish', sort: sortOptionEng })
    });
    openToast({ message: '💖 찜한 상품에서 삭제했어요' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError, onMutate });
};

export default useDeleteWishProductMutation;
