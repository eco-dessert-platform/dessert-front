import { useMutation } from '@tanstack/react-query';
import API from '@/api';
import { RegistrationRequest } from '../types';
import { useRouter } from 'next/navigation';
import { revalidateTag } from '@/action';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';
import { ErrorResponse } from '@/commons/types/errorType';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';

const useRegistrationMutation = () => {
  const { openToast } = useToast();
  const { push } = useRouter();

  const mutationFn = ({ profileImg, ...rest }: RegistrationRequest) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(rest);
    const blobData = new Blob([jsonData], { type: 'application/json' });
    formData.append('additionalInfo', blobData);
    if (profileImg) {
      formData.append('profileImg', profileImg);
    }
    return API.formPut('/members/additional-information', { body: formData });
  };

  const onSuccess = () => {
    revalidateTag(REAVALIDATE_TAG.profile);
    openToast(
      <ToastPop>
        <div>프로필 등록이 완료되었어요.</div>
      </ToastPop>
    );
    push('/');
  };

  const onError = (e: ErrorResponse) => {
    const message = e.message || '알 수 없는 이유로 등록에 실패했어요.';

    openToast(
      <ToastPop>
        <div>{message}</div>
      </ToastPop>
    );
  };
  return useMutation({ mutationFn, onSuccess, onError });
};

export default useRegistrationMutation;
