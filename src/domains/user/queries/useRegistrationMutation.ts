import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import useToastNewVer from '@/shared/hooks/useToastNewVer';
import fetchExtend from '@/shared/utils/api';
import PATH from '@/shared/constants/path';
import QUERY_KEY from '@/shared/constants/queryKey';
import { revalidateTag } from '@/shared/actions/revalidate';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import { RegistrationRequest } from '../types/profile';

const useRegistrationMutation = () => {
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const mutationFn = async ({ profileImg, ...rest }: RegistrationRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    formData.append('additionalInfo', blobData);
    if (profileImg) {
      formData.append('profileImg', profileImg);
    }

    const res = await fetchExtend.formPut('/members/additional-information', { body: formData });
    const { success, message, code }: DefaultResponse = await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }

    return message;
  };

  const onSuccess = async () => {
    await revalidateTag(QUERY_KEY.profile);
    openToast({ message: '프로필 등록이 완료되었어요.' });
    push(PATH.recommendationCreate({ progress: 1 }));
  };

  const onError = (e: Error) => {
    const message = e.message || '알 수 없는 이유로 등록에 실패했어요.';
    openToast({ message });
  };
  return useMutation({ mutationFn, onSuccess, onError });
};

export default useRegistrationMutation;
