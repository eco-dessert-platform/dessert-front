import fetchExtend from '@/shared/utils/api';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { Cursor, DefaultResponse } from '@/shared/types/response';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { storeQueryKey } from '@/domains/store/queries/queryKey';
import { IStoreType } from '@/domains/store/types/store';
import { updateInfiniteQueryCache } from './common/updater';

const useDeleteWishStoreMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async ({ storeId }: { storeId: number }) => {
    const res = await fetchExtend.patch(`/likes/store/${storeId}`);
    const { code, message, success }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return storeId;
  };

  const onSuccess = (storeId: number) => {
    queryClient.setQueriesData<InfiniteData<Cursor<IStoreType[]>>>(
      { queryKey: storeQueryKey.lists() },
      (oldData) =>
        updateInfiniteQueryCache(oldData, { key: 'storeId', value: storeId }, { isWished: false })
    );
    openToast({ message: '💖 찜한 스토어에서 삭제했어요' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useDeleteWishStoreMutation;
