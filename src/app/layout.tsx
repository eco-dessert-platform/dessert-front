import '@/global/global.css';
import { ReactNode, useEffect, useState } from 'react';
import localFont from 'next/font/local';
import KaKaoChatScript from '@/global/KaKaoChatScript';
import RootLayoutProvider from '@/global/RootLayoutProvider';
import SilentLogin from '@/global/SilentLogin';
import GAScript from '@/global/GAScript';
import ReceiveMessageFromApp from '@/global/ReceiveMessageFromApp';
import AlertContainer from '@/global/AlertContainer';
import { getStaticMetadata } from '@/shared/utils/metadata';

const pretendard = localFont({
  src: '../../public/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920'
});

export const metadata = getStaticMetadata('root');

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [isKakaoInApp, setIsKakaoInApp] = useState(false);
  useEffect(() => {
    // 카카오톡 인앱 브라우저 감지
    const useragt = navigator.userAgent.toLowerCase();
    const isKakaoInAppBrowser = useragt.match(/kakaotalk/i);

    if (isKakaoInAppBrowser) {
      setIsKakaoInApp(true);
      const currentUrl = window.location.href;

      setTimeout(() => {
        window.location.replace(
          `kakaotalk://web/openExternal?url=${  encodeURIComponent(currentUrl)}`
        );
      }, 100);
    }
  }, []);

  if (isKakaoInApp) {
    return (
      <div>
        <p>현재 카카오톡 인앱 브라우저에서는 페이지가 올바르게 작동하지 않습니다.</p>
        <p>
          외부 브라우저에서 열어주세요.{' '}
          <a href={window.location.href} target="_blank" rel="noreferrer">
            여기
          </a>{' '}
          를 눌러서 크롬, 사파리 또는 삼성 인터넷에서 다시 열 수 있습니다.
        </p>
      </div>
    );
  }

  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="PrpME1IVVESozFHxEKcgSVkL8preaJpDFYJ5Rtsjygk"
        />
      </head>
      <body className={pretendard.className}>
        <RootLayoutProvider>
          <SilentLogin />
          <ReceiveMessageFromApp />
          {children}
          <AlertContainer />
        </RootLayoutProvider>
        <KaKaoChatScript />
        <GAScript />
      </body>
    </html>
  );
};

export default RootLayout;
