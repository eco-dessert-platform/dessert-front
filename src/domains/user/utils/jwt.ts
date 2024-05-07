import { ParsedJWT } from '@/domains/user/types/login';
import { SECOND } from '@/shared/constants/time';

export function parseJwt(token: string) {
  const payloadBase64 = token.split('.')[1];
  const decodedPayload = window.atob(payloadBase64);
  const decoded: ParsedJWT = JSON.parse(decodedPayload);

  return decoded;
}

export function expToDate(exp: number) {
  const expireDate = new Date(exp * 1000);
  return expireDate;
}

export const expToMaxAge = (exp: number) => {
  const now = Date.now();
  return exp - now;
};

export const getExpFromToken = (token: string) => {
  const { exp: tokenExpInSec } = parseJwt(token);
  return tokenExpInSec * SECOND;
};
