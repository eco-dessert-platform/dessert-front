import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';
import PATH from '@/shared/constants/path';
import { revalidateTag } from '@/shared/actions/revalidate';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { MyProfileUpdateRequest } from '../types/profile';

const useProfileUpdateMutation = () => {
  const { push } = useRouter();
  const { openToast } = useToastNewVer();

  const mutationFn = async ({ profileImg, ...rest }: MyProfileUpdateRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    formData.append('infoUpdateRequest', blobData);
    if (profileImg) {
      formData.append('profileImg', profileImg);
    }

    const res = await fetchExtend.formPut('/profile', { body: formData });
    const { success, code, message, fieldErrors }: DefaultResponse = await res.json();

    if (!res.ok || !success) {
      console.error(fieldErrors);
      throwApiError({ code, message });
    }
  };

  const onSuccess = async () => {
    await revalidateTag(QUERY_KEY.profile);
    openToast({ message: '프로필 수정이 완료되었어요.' });

    push(PATH.mypage);
  };

  const onError = (e: Error) => {
    const message = e.message || '알 수 없는 이유로 수정에 실패했어요.';
    openToast({ message });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useProfileUpdateMutation;
