'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSession } from 'next-auth/react';
import { accessTokenState, isLoggedInState } from '@/atoms/atom';

const SessionLoader = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession();

  const setIsLoggedInState = useSetRecoilState(isLoggedInState);
  const setAccessTokenState = useSetRecoilState(accessTokenState);

  const accessToken = session?.accessToken || '';
  const isLoggedIn = !!accessToken && status === 'authenticated';

  useEffect(() => {
    setIsLoggedInState(isLoggedIn);
    setAccessTokenState(accessToken);
  }, [isLoggedIn, accessToken, setAccessTokenState, setIsLoggedInState]);

  return <>{children}</>;
};

export default SessionLoader;
