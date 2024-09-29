'use client';

import Loading from '@/shared/components/Loading';
import { LOGIN_TYPE } from '@/shared/constants/message';
import { APP_URL } from '@/shared/constants/url';
import { useEffect } from 'react';

const GoogleLoginLoadingPage = () => {
  useEffect(() => {
    const { hash } = window.location;
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    if (!token) return;

    const message = JSON.stringify({
      type: LOGIN_TYPE,
      data: { socialType: 'GOOGLE', code: token }
    });

    if (!window.opener) {
      window.location.replace(`${APP_URL}?message=${message}`);
      return;
    }

    window.opener.postMessage(message, window.location.origin);
    window.close();
  });

  return <Loading />;
};

export default GoogleLoginLoadingPage;
