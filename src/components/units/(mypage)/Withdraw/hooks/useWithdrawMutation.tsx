import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { withdrawMemberShip } from '@/components/units/(mypage)/Withdraw/api/withdrawMemberShip';
import usePopup from '@/commons/hooks/usePopup';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';

export const useWithdrawMutation = () => {
  const router = useRouter();
  const { closePopup } = usePopup();
  const { openToast } = useToast();

  return useMutation({
    mutationFn: ({ formData }: { formData: FormData }) => withdrawMemberShip({ formData }),
    onSettled: closePopup,
    onSuccess: (message: string) => {
      openToast(
        <ToastPop>
          <div>{message}</div>
        </ToastPop>
      );
      router.push('/');
    },
    onError: (errorMessage: Error['message']) => {
      console.log('회원탈퇴 에러 발생:', errorMessage);
    },
    throwOnError: true
  });
};
