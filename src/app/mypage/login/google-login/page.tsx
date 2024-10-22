'use client';

import Loading from '@/shared/components/Loading';
import { LOGIN_TYPE } from '@/shared/constants/message';
import { APP_URL } from '@/shared/constants/url';
import { useEffect, useState } from 'react';

const GoogleLoginLoadingPage = () => {
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);
  useEffect(() => {
    const isInKakaoInAppBrowser = () => {
      const userAgent = navigator.userAgent || window.opera;
      return /KAKAOTALK/i.test(userAgent); // 카카오톡 인앱 브라우저 감지
    };

    if (isInKakaoInAppBrowser()) {
      // 카카오톡 인앱 브라우저에서 외부 브라우저로 리디렉트
      setShowRedirectMessage(true);
    }
  }, []);

  useEffect(() => {
    if (!showRedirectMessage) {
      // 카카오톡 인앱 브라우저가 아닌 경우에만 구글 로그인 처리
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
    }
  });

  const handleOpenInExternalBrowser = () => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const cleanUrl = `${url.origin}/mypage/login`;
    const encodedUrl = encodeURIComponent(cleanUrl);

    window.location.href = `kakaotalk://web/openExternal?url=${encodedUrl}`;
  };

  return showRedirectMessage ? (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <p>이 페이지는 외부 브라우저에서 열어야 합니다.</p>
      <button
        type="button"
        onClick={handleOpenInExternalBrowser}
        style={{ padding: '10px 20px', background: 'gray', fontSize: '16px' }}
      >
        외부 브라우저로 열기
      </button>
    </div>
  ) : (
    <Loading />
  );
};

export default GoogleLoginLoadingPage;
