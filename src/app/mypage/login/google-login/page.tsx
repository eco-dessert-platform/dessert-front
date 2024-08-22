'use client';

import Loading from '@/shared/components/Loading';
import { useEffect } from 'react';
import useSocialLoginMutation from '@/domains/user/queries/useSocialLoginMutation';
import PATH from '@/shared/constants/path';
import { useRouter } from 'next/navigation';

const GoogleLoginLoadingPage = () => {
  const { mutate } = useSocialLoginMutation();
  const { replace } = useRouter();

  useEffect(() => {
    const { hash } = window.location;
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    if (!token) {
      replace(PATH.mypage);
      return;
    }
    mutate({ socialToken: token, socialType: 'GOOGLE' });
  }, [mutate, replace]);

  return <Loading />;
};

export default GoogleLoginLoadingPage;
