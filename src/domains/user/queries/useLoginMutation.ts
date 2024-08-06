import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import fetchExtend from '@/shared/utils/api';
import PATH from '@/shared/constants/path';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useAuth from '@/shared/hooks/useAuth';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const useLoginMutation = () => {
  const { openToast } = useToastNewVer();
  const { replace } = useRouter();
  const { login } = useAuth();

  const mutationFn = async (accessToken: string) => {
    const res = await fetchExtend.get(`/oauth/login/kakao?token=${accessToken}`);
    const { success, result, code, message }: ResultResponse<LoginResponse> = await res.json();
    if (!res.ok || !success) {
      throwApiError({ code, message });
    }
    return result;
  };

  const onSuccess = async ({ accessToken, refreshToken }: LoginResponse) => {
    await login({ accessToken, refreshToken });
    openToast({ message: '로그인 되었어요.' });
    replace(PATH.home);
  };

  const onError = () => {
    openToast({ message: '로그인 실패했어요.' });
    replace(PATH.mypage);
  };

  return useMutation({ mutationKey: ['login'], mutationFn, onSuccess, onError });
};

export default useLoginMutation;
