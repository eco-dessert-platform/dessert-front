import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { Cursor } from '@/shared/types/response';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { storeQueryKey } from '@/domains/store/queries/queryKey';
import { IStoreType } from '@/domains/store/types/store';
import { updateInfiniteQueryCache } from '../../../shared/utils/queryCache';
import wishService from './service';

const useDeleteWishStoreMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async ({ storeId }: { storeId: number }) => {
    await wishService.deleteWishStore({ storeId });
  };

  const onMutate = ({ storeId }: { storeId: number }) => {
    queryClient.setQueriesData<InfiniteData<Cursor<IStoreType[]>>>(
      { queryKey: storeQueryKey.lists() },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { key: 'storeId', value: storeId }, { isWished: false })
    );
  };

  const onSuccess = () => {
    openToast({ message: '💖 찜한 스토어에서 삭제했어요' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError, onMutate });
};

export default useDeleteWishStoreMutation;
