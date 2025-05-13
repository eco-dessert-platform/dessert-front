import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { Cursor } from '@/shared/types/response';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { storeQueryKey } from '@/shared/queries/queryKey';
import { IStoreType } from '@/domains/store/types/store';
import { updateInfiniteQueryCache } from '../../../shared/utils/queryCache';
import wishService from './service';

const useDeleteWishStoreMutation = ({
  storeId,
  storeName
}: {
  storeId: number;
  storeName: string;
}) => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    await wishService.deleteWishStore({ storeId });
  };

  const onMutate = () => {
    queryClient.setQueriesData<InfiniteData<Cursor<IStoreType[]>>>(
      { queryKey: storeQueryKey.lists() },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { key: 'storeId', value: storeId }, (oldItem) => ({
          ...oldItem,
          isWished: false
        }))
    );

    queryClient.setQueriesData<IStoreType>(
      { queryKey: storeQueryKey.detail(storeId) },
      (oldData) => {
        if (!oldData) return oldData;
        return { ...oldData, isWished: false };
      }
    );
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: storeQueryKey.lists() });
    openToast({ message: `💖 ${storeName}을 찜한 스토어에서 삭제했어요.` });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
    queryClient.resetQueries({ queryKey: storeQueryKey.lists() });
    queryClient.resetQueries({ queryKey: storeQueryKey.detail(storeId) });
  };

  return useMutation({ mutationFn, onSuccess, onError, onMutate });
};

export default useDeleteWishStoreMutation;
