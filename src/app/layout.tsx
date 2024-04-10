import './global.css';

import { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/commons/footer/server/Footer';
import KaKaoChatScript from '@/components/commons/KaKaoChatScript';
import ModalContainer from '@/components/commons/ModalContainer';
import PopupContainer from '@/components/commons/PopupContainer';
import RootLayoutProvider from '@/components/commons/RootLayoutProvider';
import ToastContainer from '@/components/commons/ToastContainer';

const pretendard = localFont({
  src: '../commons/assets/PretendardVariable.woff2'
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
        <ModalContainer />
        <PopupContainer />
        <ToastContainer />
        <div className="sm:w-[600px] w-full m-auto pb-24 min-h-screen relative shadow-lg">
          {children}
        </div>
        <Footer />
      </RootLayoutProvider>
      <KaKaoChatScript />
    </body>
  </html>
);

export default RootLayout;
