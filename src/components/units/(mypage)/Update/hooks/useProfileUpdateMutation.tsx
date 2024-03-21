import { useMutation } from '@tanstack/react-query';

import API from '@/api';
import { MyProfileUpdateRequest } from '../types';
import { revalidateTag } from '@/action';
import { useRouter } from 'next/navigation';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';

const useProfileUpdateMutation = () => {
  const { push } = useRouter();
  const { openToast } = useToast();

  const mutationFn = async ({ profileImg, ...rest }: MyProfileUpdateRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    formData.append('infoUpdateRequest', blobData);
    if (profileImg) {
      formData.append('profileImg', profileImg);
    }
    return API.formPut('/profile', { body: formData });
  };

  const onSuccess = async () => {
    await revalidateTag(REAVALIDATE_TAG.profile);
    openToast(
      <ToastPop>
        <div>프로필 수정이 완료되었어요.</div>
      </ToastPop>
    );

    push('/mypage');
  };

  const onError = (e: Error) => {
    const message = e.message || '알 수 없는 이유로 수정에 실패했어요.';

    openToast(
      <ToastPop>
        <div>{message}</div>
      </ToastPop>
    );
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useProfileUpdateMutation;
