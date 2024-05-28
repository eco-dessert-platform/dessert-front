import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import useModal from '@/shared/hooks/useModal';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { revalidateTag } from '@/shared/actions/revalidate';
import { REAVALIDATE_TAG } from '@/shared/constants/revalidateTags';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { isLoggedinState } from '@/shared/atoms/login';
import PATH from '@/shared/constants/path';
import wishService from './service';
import WishFolderSelectModal from '../components/alert-box/WishFolderSelectModal';

const useAddWishProductMutation = () => {
  const { openToast } = useToastNewVer();
  const { openModal } = useModal();
  const isLoggedIn = useRecoilValue(isLoggedinState);

  const mutationFn = async ({ productId, folderId }: { productId: string; folderId: string }) => {
    if (!isLoggedIn) throw new Error(ERROR_MESSAGE.requiredLogin);
    await wishService.addWishProduct({ productId, folderId });
    return { productId };
  };

  const onSuccess = async ({ productId }: { productId: string }) => {
    await revalidateTag(REAVALIDATE_TAG.product);
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

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useAddWishProductMutation;
