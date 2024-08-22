import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import useModal from '@/shared/hooks/useModal';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { isLoggedinState } from '@/shared/atoms/login';
import PATH from '@/shared/constants/path';
import { productQueryKey, storeQueryKey } from '@/shared/queries/queryKey';
import { IProductType } from '@/domains/product/types/productType';
import { Cursor } from '@/shared/types/response';
import { IStoreProductType } from '@/domains/store/types/store';
import wishService from './service';
import WishFolderSelectModal from '../components/alert-box/WishFolderSelectModal';
import { wishQueryKey } from './queryKey';
import { updateInfiniteQueryCache } from '../../../shared/utils/queryCache';

const useAddWishProductMutation = () => {
  const { openToast } = useToastNewVer();
  const { openModal } = useModal();
  const isLoggedIn = useRecoilValue(isLoggedinState);
  const queryClient = useQueryClient();

  const mutationFn = async ({ productId, folderId }: { productId: number; folderId: number }) => {
    if (!isLoggedIn) throw new Error(ERROR_MESSAGE.requiredLogin);
    await wishService.addWishProduct({ productId, folderId });
    return { productId };
  };

  const onMutate = ({ productId }: { productId: number }) => {
    queryClient.setQueriesData<InfiniteData<Cursor<IProductType[]>>>(
      { queryKey: productQueryKey.all },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { value: productId, key: 'boardId' }, (oldItem) => ({
          ...oldItem,
          isWished: true
        }))
    );
    queryClient.setQueriesData<Array<IStoreProductType>>(
      {
        queryKey: storeQueryKey.details(),
        predicate: (query) => query.queryKey[3] === 'best-products'
      },
      (oldData) =>
        oldData?.map((data) => (data.boardId === productId ? { ...data, isWished: true } : data))
    );
    queryClient.setQueriesData<InfiniteData<Cursor<IProductType[]>>>(
      {
        queryKey: storeQueryKey.details(),
        predicate: (query) => query.queryKey[3] === 'all-products'
      },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { value: productId, key: 'boardId' }, (oldItem) => ({
          ...oldItem,
          isWished: true
        }))
    );
  };

  const onSuccess = ({ productId }: { productId: number }) => {
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });
    queryClient.invalidateQueries({ queryKey: productQueryKey.detail(productId, 'board-detail') });

    const openFolderSelectModal = () => openModal(<WishFolderSelectModal productId={productId} />);
    openToast({
      message: '💖 찜한 상품에 추가했어요',
      action: (
        <button type="button" className="hover:underline" onClick={openFolderSelectModal}>
          편집
        </button>
      )
    });
  };

  const onError = ({ message }: Error) => {
    switch (message) {
      case ERROR_MESSAGE.requiredLogin:
        openToast({
          message: ERROR_MESSAGE.requiredLogin,
          action: (
            <Link className="hover:underline" href={PATH.login}>
              로그인
            </Link>
          )
        });
        break;

      default:
        openToast({ message });
        break;
    }
  };

  return useMutation({ mutationFn, onSuccess, onError, onMutate });
};

export default useAddWishProductMutation;
