import { useMutation } from '@tanstack/react-query';
import useAuth from '@/shared/hooks/useAuth';
import userService from './service';

interface ResultType {
  accessToken: string;
}

const useSilentLoginMutation = () => {
  const { logout, login } = useAuth();

  const mutationFn = async (refreshToken: string) => {
    const accessToken = await userService.extendLogin(refreshToken);
    return accessToken;
  };

  const onSuccess = async ({ accessToken }: ResultType) => {
    await login({ accessToken });
  };

  const onError = async (error: Error) => {
    await logout();
    console.error(error);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useSilentLoginMutation;
