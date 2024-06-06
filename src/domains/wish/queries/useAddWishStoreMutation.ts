import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { useMutation } from '@tanstack/react-query';
import { revalidatePath } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import wishService from './service';

const useAddWishStoreMutation = () => {
  const { openToast } = useToastNewVer();

  const mutationFn = ({ storeId }: { storeId: number }) => wishService.addWishStore({ storeId });

  const onSuccess = async () => {
    openToast({ message: '💖 찜한 스토어에 추가했어요' });
    revalidatePath(PATH.wishStoreList);
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useAddWishStoreMutation;
