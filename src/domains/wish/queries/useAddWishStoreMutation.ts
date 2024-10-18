import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { Cursor } from '@/shared/types/response';
import { IStoreType } from '@/domains/store/types/store';
import { storeQueryKey } from '@/shared/queries/queryKey';
import { updateInfiniteQueryCache } from '../../../shared/utils/queryCache';
import wishService from './service';

const useAddWishStoreMutation = (storeId: number) => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    await wishService.addWishStore({ storeId });
  };

  const onMutate = () => {
    queryClient.setQueriesData<InfiniteData<Cursor<IStoreType[]>>>(
      { queryKey: storeQueryKey.lists() },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { key: 'storeId', value: storeId }, (oldItem) => ({
          ...oldItem,
          isWished: true
        }))
    );
    queryClient.setQueriesData<IStoreType>(
      { queryKey: storeQueryKey.detail(storeId) },
      (oldData) => {
        if (!oldData) return oldData;
        return { ...oldData, isWished: true };
      }
    );
  };

  const onSuccess = () => {
    openToast({ message: '💖 찜한 스토어 리스트에 추가했어요.' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
    queryClient.resetQueries({ queryKey: storeQueryKey.lists() });
    queryClient.resetQueries({ queryKey: storeQueryKey.detail(storeId) });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
    onMutate
  });
};

export default useAddWishStoreMutation;
