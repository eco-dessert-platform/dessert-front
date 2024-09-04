'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import LoginLogoSection from '@/blocks/user/login/LoginLogoSection';
import GoogleLoginButton from '@/blocks/user/login/GoogleLoginButton';
import { socialLoginPopupState } from '@/domains/user/atoms/login';
import { SocialType } from '@/domains/user/types/login';
import { useKakaoLoginMutation } from '@/domains/user/queries/useLoginMutation';
import KakaoLoginButton from './_blocks/KakaoLoginButton';

const LoginPage = () => {
  const [popup, setPopup] = useRecoilState(socialLoginPopupState);
  const [message, setMessage] = useState<{ code: string; socialType: SocialType }>();
  const { mutate: kakaoMutate } = useKakaoLoginMutation();

  // usePopupEffect : 팝업 열렸을때 대기 (메시지 수신 대기)
  useEffect(() => {
    if (!popup) return undefined;

    const handlePopup = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const { code, socialType } = e.data;
      if (!code || !socialType) return;

      popup.window.close();
      setPopup(null);
      setMessage({ code, socialType });
    };

    window.addEventListener('message', handlePopup);
    return () => {
      window.removeEventListener('message', handlePopup);
    };
  }, [popup, setPopup, kakaoMutate]);

  useEffect(() => {
    if (!message) return;
    if (message.socialType) kakaoMutate(message.code);
  }, [message, kakaoMutate]);

  return (
    <div className="flex flex-col gap-[81px] px-[16px] m-[16px] pt-[70px]">
      <LoginLogoSection
        title="안녕하세요👋 빵그리의 오븐입니다 :)"
        subTitle="여러분들이 원하는 비건 베이커리들을 함께 만나봐요!"
      />
      <div className="flex flex-col gap-3">
        <KakaoLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
