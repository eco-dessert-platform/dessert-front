import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { isLoggedinState } from '@/shared/atoms/login';
import fetchExtend from '@/shared/utils/api';
import PATH from '@/shared/constants/path';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import { setCookie } from '@/shared/actions/cookie';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import { TOKEN } from '@/shared/constants/token';
import { getExpFromToken, setTimerForAccessTokenExp } from '../utils/jwt';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const useLoginMutation = () => {
  const { openToast } = useToast();
  const setLogin = useSetRecoilState(isLoggedinState);
  const { replace } = useRouter();

  const mutationFn = async (accessToken: string) => {
    const res = await fetchExtend.get(`/oauth/login/kakao?token=${accessToken}`);
    const { success, result, code, message }: ResultResponse<LoginResponse> = await res.json();
    if (!res.ok || !success) {
      throwApiError({ code, message });
    }
    return result;
  };

  const onSuccess = async ({ accessToken, refreshToken }: LoginResponse) => {
    const accessTokenExp = getExpFromToken(accessToken);
    const refreshTokenExp = getExpFromToken(refreshToken);

    await Promise.all([
      setCookie({
        name: TOKEN.accessToken,
        value: accessToken,
        expires: accessTokenExp
      }),
      setCookie({
        name: TOKEN.refreshToken,
        value: refreshToken,
        expires: refreshTokenExp
      })
    ]);
    openToast(<ToastPop>로그인 되었어요.</ToastPop>);

    setTimerForAccessTokenExp();
    setLogin(true);
    replace(PATH.home);
  };

  const onError = () => {
    openToast(<ToastPop>로그인 실패했어요.</ToastPop>);
    replace(PATH.mypage);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useLoginMutation;
