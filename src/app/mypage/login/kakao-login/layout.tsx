'use client';

import { PropsWithChildren, Suspense, useEffect } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    function isInKakaoInAppBrowser() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /KAKAOTALK/i.test(userAgent);
    }

    function redirectToExternalBrowser() {
      if (isInKakaoInAppBrowser()) {
        const currentUrl = window.location.href;
        const userAgent = navigator.userAgent || window.opera;
        const isiOS = /iPhone|iPad|iPod/i.test(userAgent);

        if (isiOS) {
          // iOS 기기에서는 사파리로 열도록 처리
          window.open(currentUrl, '_blank');
        } else {
          // Android 기기에서는 Chrome으로 열도록 처리
          window.location.href =
            `intent:${  currentUrl  }#Intent;scheme=https;package=com.android.chrome;end;`;
        }
      }
    }

    redirectToExternalBrowser();
  }, []);

  return <Suspense>{children}</Suspense>;
};

export default Layout;
