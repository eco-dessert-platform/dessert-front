import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { isLoggedinState } from '@/shared/atoms/login';
import fetchExtend from '@/shared/utils/api';
import PATH from '@/shared/constants/path';
import { setCookie } from '@/shared/actions/cookie';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import { TOKEN } from '@/shared/constants/token';
import { getExpFromToken } from '@/domains/user/utils/jwt';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const useLoginMutation = () => {
  const { openToast } = useToastNewVer();
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
    openToast({ message: '로그인 되었어요.' });

    setLogin(true);
    replace(PATH.home);
  };

  const onError = () => {
    openToast({ message: '로그인 실패했어요.' });
    replace(PATH.mypage);
  };

  return useMutation({ mutationKey: ['login'], mutationFn, onSuccess, onError });
};

export default useLoginMutation;
