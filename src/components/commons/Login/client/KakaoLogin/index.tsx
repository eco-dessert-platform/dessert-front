'use client';

import { signIn } from 'next-auth/react';
import KakaoIcon from '@/components/commons/Login/client/KakaoLogin/assets/kakao_logo.svg';

const KakaoLogin = () => {
  return (
    <div className="w-auto h-[52px] p-4 bg-[#FEE500] rounded-[10px] shadow flex-col justify-center items-center gap-4 inline-flex">
      <button
        className="inline-flex items-center justify-start gap-2"
        onClick={() => signIn('kakao')}
      >
        <KakaoIcon />
        <div className="text-black text-opacity-90 text-base font-medium font-['Pretendard'] leading-normal">
          카카오톡 시작하기
        </div>
      </button>
    </div>
  );
};

export default KakaoLogin;
