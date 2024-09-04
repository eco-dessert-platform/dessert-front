'use client';

import Loading from '@/shared/components/Loading';
import { useEffect } from 'react';

const GoogleLoginLoadingPage = () => {
  useEffect(() => {
    const { hash } = window.location;
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    if (!token) throw new Error('구글 로그인 시도 중 에러가 발생했어요.');

    window.opener.postMessage({ code: token, socialType: 'GOOGLE' }, window.location.origin);
  });

  return <Loading />;
};

export default GoogleLoginLoadingPage;
