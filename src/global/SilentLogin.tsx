'use client';

import { useEffect, useState } from 'react';
import { getRefreshToken } from '@/shared/utils/token';
import useSilentLoginMutation from '@/domains/user/queries/useSilentLoginMutation';
import { getExpFromToken, expToMaxAge } from '@/domains/user/utils/jwt';
import { MINUTE } from '@/shared/constants/time';

const SilentLogin = () => {
  const [refreshToken, setRefreshToken] = useState<string>();
  const { mutate: silentLogin, data: tokenData } = useSilentLoginMutation();

  useEffect(() => {
    getRefreshToken().then((token) => setRefreshToken(token));
  }, []);

  useEffect(() => {
    if (!refreshToken) return;
    silentLogin(refreshToken);
  }, [refreshToken, silentLogin]);

  useEffect(() => {
    if (!tokenData || !tokenData.accessToken) return undefined;
    const { accessToken } = tokenData;
    const accessTokenExp = getExpFromToken(accessToken);
    const accessTokenMaxAge = expToMaxAge(accessTokenExp);

    const timeoutId = setTimeout(silentLogin, accessTokenMaxAge - 10 * MINUTE, refreshToken);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [tokenData, refreshToken, silentLogin]);

  return null;
};

export default SilentLogin;
