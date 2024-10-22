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

    // 현재 URL에서 "code" 파라미터를 제거
    const url = new URL(currentUrl);
    url.searchParams.delete('code'); // "code" 파라미터 삭제

    // "code" 파라미터가 제거된 URL 생성
    const cleanUrl = `${url.origin}${url.pathname}`; // "code" 파라미터가 없는 기본 URL
    const encodedUrl = encodeURIComponent(cleanUrl);

    // "code" 값이 제거된 URL을 외부 브라우저로 열기
    window.location.href = `kakaotalk://web/openExternal?url=${encodedUrl}`;
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
        style={{ padding: '10px 20px', background: 'gray', fontSize: '16px' }}
      >
        외부 브라우저로 열기
      </button>
    </div>
  ) : (
    <Loading />
  );
};

export default KakaoLoginLoadingPage;
