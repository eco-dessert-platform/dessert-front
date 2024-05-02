import '@/global/global.css';

import { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import KaKaoChatScript from '@/global/KaKaoChatScript';
import ModalContainer from '@/global/ModalContainer';
import PopupContainer from '@/global/PopupContainer';
import RootLayoutProvider from '@/global/RootLayoutProvider';
import ToastContainer from '@/global/ToastContainer';
import Footer from '@/global/Footer';
// import FlareLaneScript from '@/global/FlareLaneScript';
// import RegisterServiceWorker from '@/global/RegisterServiceWorker';
import SilentLogin from '@/global/SilentLogin';

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
        <ModalContainer />
        <PopupContainer />
        <ToastContainer />
        <div className="sm:w-[600px] w-full m-auto pb-24 min-h-screen relative shadow-lg">
          {children}
        </div>
        <Footer />
      </RootLayoutProvider>
      <KaKaoChatScript />
      {/* <RegisterServiceWorker /> */}
      {/* <FlareLaneScript /> */}
    </body>
  </html>
);

export default RootLayout;
