import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { Cursor } from '@/shared/types/response';
import { IStoreType } from '@/domains/store/types/store';
import { storeQueryKey } from '@/domains/store/queries/queryKey';
import { updateInfiniteQueryCache } from '../../../shared/utils/queryCache';
import wishService from './service';

const useAddWishStoreMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async ({ storeId }: { storeId: number }) => {
    await wishService.addWishStore({ storeId });
    return storeId;
  };

  const onSuccess = async (storeId: number) => {
    queryClient.setQueriesData<InfiniteData<Cursor<IStoreType[]>>>(
      { queryKey: storeQueryKey.lists() },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { key: 'storeId', value: storeId }, { isWished: true })
    );
    openToast({ message: '💖 찜한 상품에 추가했어요' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useAddWishStoreMutation;
