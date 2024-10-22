'use client';

import ButtonNewver from '@/shared/components/ButtonNewver';
import Loading from '@/shared/components/Loading';
import { LOGIN_TYPE } from '@/shared/constants/message';
import { APP_URL } from '@/shared/constants/url';
import { useEffect, useState } from 'react';

const GoogleLoginLoadingPage = () => {
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    const isInKakaoInAppBrowser = () => {
      const userAgent = navigator.userAgent || window.opera;
      return /KAKAOTALK/i.test(userAgent);
    };

    if (isInKakaoInAppBrowser()) {
      setShowRedirectMessage(true);
    } else {
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
  }, []);

  const handleOpenInExternalBrowser = () => {
    const cleanUrl = `${window.location.origin}/mypage/login`;
    window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(cleanUrl)}`;
  };

  return showRedirectMessage ? (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <p>이 페이지는 외부 브라우저에서 열어야 합니다.</p>
      <ButtonNewver
        type="button"
        onClick={handleOpenInExternalBrowser}
        className="p-[10px 20px] rounded-[6px] mt-[10px]"
      >
        외부 브라우저로 열기
      </ButtonNewver>
    </div>
  ) : (
    <Loading />
  );
};

export default GoogleLoginLoadingPage;
