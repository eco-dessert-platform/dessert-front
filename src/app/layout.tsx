import '@/global/global.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import KaKaoChatScript from '@/global/KaKaoChatScript';
import RootLayoutProvider from '@/global/RootLayoutProvider';
import Footer from '@/global/Footer';
import AlertContainer from '@/global/AlertContainer';
import SilentLogin from '@/global/SilentLogin';
import GAScript from '@/global/GAScript';
import ForeGroundMessage from '@/global/ForeGroundMessage';

const pretendard = localFont({
  src: '../../public/assets/fonts/PretendardVariable.woff2'
});

export const metadata: Metadata = {
  title: '빵그리의 오븐',
  description:
    '빵그리의 오븐은 건강을 소중히 여기는 이들에게 새로운 디저트 경험을 선사하고, 건강과 맛을 모두 충족시킬 수 있는 특별한 공간을 제공합니다.'
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ko">
    <body className={pretendard.className}>
      <RootLayoutProvider>
        <SilentLogin />
        <div
          id="main"
          className="shadow-lg sm:w-[600px] h-full m-auto overflow-x-hidden scrollbar-hide"
        >
          <main className="w-full min-h-[calc(100vh-70px)] relative">{children}</main>
          <Footer />
          <AlertContainer />
        </div>
      </RootLayoutProvider>
      <ForeGroundMessage />
      <KaKaoChatScript />
    </body>
    <GAScript />
  </html>
);

export default RootLayout;
