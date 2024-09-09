'use client';

import Loading from '@/shared/components/Loading';
import { useEffect } from 'react';

const GoogleLoginLoadingPage = () => {
  useEffect(() => {
    const { hash } = window.location;
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    if (!token) return;
    window.opener.postMessage({ code: token, socialType: 'GOOGLE' }, window.location.origin);
  });

  return <Loading />;
};

export default GoogleLoginLoadingPage;
