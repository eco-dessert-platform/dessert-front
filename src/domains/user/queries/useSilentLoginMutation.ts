import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';
import PATH from '@/shared/constants/path';
import { TOKEN } from '@/shared/constants/token';
import fetchExtend from '@/shared/utils/api';
import { setCookie } from '@/shared/actions/cookie';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import { getExpFromToken } from '@/domains/user/utils/jwt';

interface ResultType {
  accessToken: string;
}

const useSilentLoginMutation = () => {
  const setLogin = useSetRecoilState(isLoggedinState);

  const mutationFn = async (refreshToken: string) => {
    const res = await fetchExtend.post(PATH.token, {
      body: JSON.stringify({ refreshToken })
    });
    const { result, success, code, message }: ResultResponse<ResultType> = await res.json();
    if (!res.ok || !success) {
      throwApiError({ code, message });
    }
    return result;
  };

  const onSuccess = async ({ accessToken }: ResultType) => {
    const accessTokenExp = getExpFromToken(accessToken);

    await setCookie({
      name: TOKEN.accessToken,
      value: accessToken,
      expires: accessTokenExp
    });

    setLogin(true);
  };

  const onError = (error: Error) => {
    setLogin(false);
    console.error(error);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useSilentLoginMutation;
