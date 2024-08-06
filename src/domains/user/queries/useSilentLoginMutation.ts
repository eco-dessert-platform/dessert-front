import { useMutation } from '@tanstack/react-query';
import useAuth from '@/shared/hooks/useAuth';
import { useRouter } from 'next/navigation';
import PATH from '@/shared/constants/path';
import userService from './service';

interface ResultType {
  accessToken: string;
}

const useSilentLoginMutation = () => {
  const { logout, login } = useAuth();
  const { push } = useRouter();

  const mutationFn = async (refreshToken: string) => {
    const accessToken = await userService.extendLogin(refreshToken);
    return accessToken;
  };

  const onSuccess = async ({ accessToken }: ResultType) => {
    await login({ accessToken });
    const { isPreferenceAssigned } = await userService.getMyPreferenceStatus();
    if (!isPreferenceAssigned) {
      push(PATH.preferenceCreate);
    }
  };

  const onError = async (error: Error) => {
    await logout();
    console.error(error);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useSilentLoginMutation;
