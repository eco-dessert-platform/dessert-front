import fetchExtend from '@/shared/utils/api';
import { AccessTokenType } from '@/domains/user/types/login';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

interface ResultType {
  accessToken: AccessTokenType;
}

export const getAccessTokenFromRefreshToken = async (refreshToken: string) => {
  const res = await fetchExtend.post('/token', {
    body: JSON.stringify({ refreshToken })
  });
  const { result, success, code, message }: ResultResponse<ResultType> = await res.json();

  if (!res.ok || !success) {
    throwApiError({ code, message });
  }

  return result.accessToken;
};
