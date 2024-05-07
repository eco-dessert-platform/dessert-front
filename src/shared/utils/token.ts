import { TOKEN } from '@/shared/constants/token';
import { getCookie } from '../actions/cookie';

export const getAccessToken = async () => {
  const accessToken = await getCookie(TOKEN.accessToken);
  return accessToken?.value;
};

export const getRefreshToken = async () => {
  const refreshToken = await getCookie(TOKEN.refreshToken);
  return refreshToken?.value;
};
