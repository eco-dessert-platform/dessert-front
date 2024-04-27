import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import usePopup from '@/shared/hooks/usePopup';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import PATH from '@/shared/constants/path';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';

interface WithdrawResponse {
  message: string;
}

const useWithdrawMutation = () => {
  const router = useRouter();
  const { closePopup } = usePopup();
  const { openToast } = useToast();

  const mutationFn = async ({ formData }: { formData: FormData }) => {
    const rawFormData = {
      reasons: formData.getAll('delete-reason').join(',')
    };

    const res = await fetchExtend.patch('/members', {
      body: JSON.stringify(rawFormData)
    });
    const { result, success, code }: ResultResponse<WithdrawResponse> = await res.json();

    if (!res.ok || !success) {
      throw new Error(`[ERROR ${code}] 회원 탈퇴 중 에러가 발생했어요.`);
    }

    return result;
  };

  const onSuccess = ({ message }: { message: string }) => {
    openToast(
      <ToastPop>
        <div>{message}</div>
      </ToastPop>
    );
    router.push(PATH.home);
  };

  const onError = ({ message }: Error) => {
    openToast(
      <ToastPop>
        <div>{message}</div>
      </ToastPop>
    );
  };

  return useMutation({
    mutationFn,
    onSettled: closePopup,
    onSuccess,
    onError,
    throwOnError: true
  });
};

export default useWithdrawMutation;
