'use client';

import Loading from '@/shared/components/Loading';
import useKakaoAuthMutation from '@/domains/user/queries/useKakaoAuthMutation';
import useLoginMutation from '@/domains/user/queries/useLoginMutation';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { getExpFromToken, expToMaxAge } from '@/domains/user/utils/jwt';
import useSilentLoginMutation from '@/domains/user/queries/useSilentLoginMutation';
import { MINUTE } from '@/shared/constants/time';

const KakaoLoginLoading = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { mutate: mutateKakaoAuth, data: kakoAuthData } = useKakaoAuthMutation();
  const { mutate: mutateLogin, data: tokenData } = useLoginMutation();
  const { mutate: silentLogin } = useSilentLoginMutation();

  useEffect(() => {
    if (!code) return;
    mutateKakaoAuth(code);
  }, [code, mutateKakaoAuth]);

  useEffect(() => {
    if (!kakoAuthData?.access_token) return;
    mutateLogin(kakoAuthData.access_token);
  }, [mutateLogin, kakoAuthData]);

  useEffect(() => {
    if (!tokenData || !tokenData.accessToken || !tokenData.refreshToken) return;
    const { accessToken, refreshToken } = tokenData;
    const accessTokenExp = getExpFromToken(accessToken);
    const accessTokenMaxAge = expToMaxAge(accessTokenExp);

    setInterval(silentLogin, accessTokenMaxAge - 10 * MINUTE, refreshToken);
  }, [tokenData, silentLogin]);

  return <Loading />;
};

export default KakaoLoginLoading;
