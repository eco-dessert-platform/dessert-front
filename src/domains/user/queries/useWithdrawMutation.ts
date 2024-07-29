import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import usePopup from '@/shared/hooks/usePopup';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import PATH from '@/shared/constants/path';
import userService from '@/domains/user/queries/service';
import useLogout from '@/shared/hooks/useLogout';

const useWithdrawMutation = () => {
  const { push } = useRouter();
  const { logout } = useLogout();
  const { closePopup } = usePopup();
  const { openToast } = useToastNewVer();

  const mutationFn = async ({ formData }: { formData: FormData }) => {
    const deleteReasons = formData.getAll('delete-reason') as Array<string>;
    const result = await userService.withdraw(deleteReasons);
    return result;
  };

  const onSuccess = async ({ message }: { message: string }) => {
    openToast({ message });
    await logout();
    push(PATH.home);
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
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
