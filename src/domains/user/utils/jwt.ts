import { getCookie, setCookie, deleteCookie } from '@/shared/actions/cookie';
import { TOKEN, MAX_AGE } from '@/shared/constants/token';
import { ParsedJWT } from '@/domains/user/types/login';
import { getAccessTokenFromRefreshToken } from '@/domains/user/queries/getAccessTokenFromRefreshToken';
import { isLoggedinState } from '@/shared/atoms/login';
import { setRecoil } from 'recoil-nexus';
import { getErrorMessage } from '@/shared/utils/error';

export const parseJwt = (token: string) => {
  const payloadBase64 = token.split('.')[1];
  const decodedPayload = window.atob(payloadBase64);
  const decoded: ParsedJWT = JSON.parse(decodedPayload);

  return decoded;
};

export const expToDate = (exp: number) => {
  const expireDate = new Date(exp * 1000);
  return expireDate;
};

export const getExpFromToken = (token: string) => {
  const { exp: accessTokenExpInSec } = parseJwt(token);
  return accessTokenExpInSec * 1000; // 단위: ms
};

export const setTimerForAccessTokenExp = () => {
  const fiveMinute = 5 * 60 * 1000;
  const delay = MAX_AGE.accessToken * 1000 - fiveMinute; // 단위: ms

  return setTimeout(silentLogin, delay);
};

export const silentLogin = async () => {
  try {
    // refresh token을 보내 새 access token 받기
    const res = await getCookie(TOKEN.refreshToken);
    if (!res) return;

    const refreshToken = res.value;
    const accessToken = await getAccessTokenFromRefreshToken(refreshToken);

    // 쿠키에 새 access token 저장
    await setCookie({
      name: TOKEN.accessToken,
      value: accessToken,
      expires: getExpFromToken(accessToken)
    });

    // isLoggedInState atom 설정
    setRecoil(isLoggedinState, true);

    // access token 타이머 설정
    setTimerForAccessTokenExp();
  } catch (error) {
    deleteCookie(TOKEN.accessToken);
    console.error('[자동 로그인 실패]: ', getErrorMessage(error));
  }
};
