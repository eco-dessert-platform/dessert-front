'use client';

import { useEffect } from 'react';
import { useMutationState } from '@tanstack/react-query';
import type { LoginResponse } from '@/domains/user/queries/useLoginMutation';
import useSilentLoginMutation from '@/domains/user/queries/useSilentLoginMutation';
import { getExpFromToken, expToMaxAge } from '@/domains/user/utils/jwt';
import { MINUTE } from '@/shared/constants/time';

const SilentLoginAfterLogin = () => {
  const [tokenData] = useMutationState({
    filters: { mutationKey: ['login'] },
    select: (mutation) => mutation.state.data as LoginResponse
  });
  const { mutate: silentLogin } = useSilentLoginMutation();

  useEffect(() => {
    if (!tokenData || !tokenData.accessToken || !tokenData.refreshToken) return undefined;
    const { accessToken, refreshToken } = tokenData;
    const accessTokenExp = getExpFromToken(accessToken);
    const accessTokenMaxAge = expToMaxAge(accessTokenExp);

    const intervalId = setInterval(silentLogin, accessTokenMaxAge - 10 * MINUTE, refreshToken);
    return () => {
      clearInterval(intervalId);
    };
  }, [tokenData, silentLogin]);

  return null;
};

export default SilentLoginAfterLogin;
