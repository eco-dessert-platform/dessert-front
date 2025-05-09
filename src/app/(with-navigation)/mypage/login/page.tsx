'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import LoginLogoSection from '@/blocks/user/login/LoginLogoSection';
import { socialLoginPopupState } from '@/domains/user/atoms/login';
import { SocialType } from '@/domains/user/types/login';
import {
  useGoogleLoginMutation,
  useKakaoLoginMutation
} from '@/domains/user/queries/useLoginMutation';
import { LOGIN_TYPE } from '@/shared/constants/message';
import KakaoLoginButton from './_blocks/KakaoLoginButton';
import GoogleLoginButton from './_blocks/GoogleLoginButton';

const LoginPage = () => {
  const [popup, setPopup] = useRecoilState(socialLoginPopupState);
  const [message, setMessage] = useState<{ code: string; socialType: SocialType }>();
  const { mutate: kakaoMutate } = useKakaoLoginMutation();
  const { mutate: googleMutate } = useGoogleLoginMutation();

  useEffect(() => {
    const handlePopup = (e: MessageEvent) => {
      if (typeof e.data !== 'string') return;
      const { type, data } = JSON.parse(e.data);

      if (type !== LOGIN_TYPE || !data) return;
      const { socialType, code } = data;

      if (!code || !socialType) return;
      setMessage({ code, socialType });

      if (!popup) return;
      setPopup(null);
    };

    window.addEventListener('message', handlePopup);
    document.addEventListener('message', handlePopup as EventListener);

    return () => {
      window.removeEventListener('message', handlePopup);
      document.removeEventListener('message', handlePopup as EventListener);
    };
  }, [popup, setPopup, kakaoMutate]);

  useEffect(() => {
    if (!message) return;
    if (message.socialType === 'KAKAO') kakaoMutate(message.code);
    if (message.socialType === 'GOOGLE') googleMutate(message.code);
  }, [message, kakaoMutate, googleMutate]);

  return (
    <div className="flex flex-col gap-[81px] px-[16px] m-[16px] pt-[70px]">
      <LoginLogoSection
        title="여러분이 원하는 건강 디저트를 만나봐요!"
        subTitle="3초 로그인으로 더욱 다양한 빵그리 서비스를 경험해보세요"
      />
      <div className="flex flex-col gap-3">
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
