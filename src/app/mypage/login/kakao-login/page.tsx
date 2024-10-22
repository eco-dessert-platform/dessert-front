'use client';

import Loading from '@/shared/components/Loading';
import { LOGIN_TYPE } from '@/shared/constants/message';
import { APP_URL } from '@/shared/constants/url';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const KakaoLoginLoadingPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    const isInKakaoInAppBrowser = () => {
      const userAgent = navigator.userAgent || window.opera;
      return /KAKAOTALK/i.test(userAgent);
    };

    if (isInKakaoInAppBrowser()) {
      setShowRedirectMessage(true);
    }
  }, []);

  const handleOpenInExternalBrowser = () => {
    const currentUrl = window.location.href;
    const userAgent = navigator.userAgent || window.opera;
    const isiOS = /iPhone|iPad|iPod/i.test(userAgent);

    if (isiOS) {
      window.location.replace(currentUrl); // iOS: 사파리로 열기
    } else {
      window.location.replace(
        `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`
      ); // Android: Chrome으로 리다이렉션
    }
  };

  useEffect(() => {
    if (!code) return;

    const message = JSON.stringify({ type: LOGIN_TYPE, data: { code, socialType: 'KAKAO' } });

    if (!window.opener) {
      window.location.replace(`${APP_URL}?message=${message}`);
    } else {
      window.opener.postMessage(message, window.location.origin);
      window.close();
    }
  }, [code]);

  return showRedirectMessage ? (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <p>이 페이지는 외부 브라우저에서 열어야 합니다.</p>
      <button
        type="button"
        onClick={handleOpenInExternalBrowser}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        외부 브라우저로 열기
      </button>
    </div>
  ) : (
    <Loading />
  );
};

export default KakaoLoginLoadingPage;
