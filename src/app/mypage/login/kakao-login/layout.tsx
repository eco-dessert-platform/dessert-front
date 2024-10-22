'use client';

import { PropsWithChildren, Suspense, useEffect, useState } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    function isInKakaoInAppBrowser() {
      const userAgent = navigator.userAgent || window.opera;
      return /KAKAOTALK/i.test(userAgent);
    }

    function redirectToExternalBrowser() {
      if (isInKakaoInAppBrowser()) {
        // 외부 브라우저로 리다이렉션이 불가할 경우를 대비하여 안내 메시지 표시
        setShowRedirectMessage(true);
      }
    }

    redirectToExternalBrowser();
  }, []);

  const handleOpenInExternalBrowser = () => {
    const currentUrl = window.location.href;
    const userAgent = navigator.userAgent || window.opera;
    const isiOS = /iPhone|iPad|iPod/i.test(userAgent);
    if (isiOS) {
      // iOS 기기에서는 새 창을 여는 대신 현재 창을 대체하여 사파리로 열도록 처리
      window.location.replace(currentUrl);
    } else {
      // Android 기기에서는 Chrome으로 리다이렉션 처리
      window.location.replace(
        `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`
      );
    }
  };

  return (
    <Suspense>
      {children}
      {showRedirectMessage && (
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
      )}
    </Suspense>
  );
};

export default Layout;
