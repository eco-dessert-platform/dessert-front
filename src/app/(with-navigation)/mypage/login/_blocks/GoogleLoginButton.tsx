'use client';

import GoogleIcon from '@/domains/user/assets/google_logo.svg';
import { socialLoginPopupAtom } from '@/domains/user/atoms/login';
import { GOOGLE } from '@/domains/user/constants/socialLogin';
import { useSetAtom } from 'jotai';

const GoogleLoginButton = () => {
  const setPopup = useSetAtom(socialLoginPopupAtom);
  const queryObject = {
    client_id: GOOGLE.clientId,
    clientsecret: GOOGLE.clientSecret,
    redirect_uri: GOOGLE.redirectUri,
    response_type: GOOGLE.responseType,
    scope: GOOGLE.scope
  };

  const openGoogleLoginPopup = () => {
    const isInKakaoInAppBrowser = () => {
      const userAgent = navigator.userAgent || window.opera;
      return /KAKAOTALK/i.test(userAgent);
    };

    if (isInKakaoInAppBrowser()) {
      const cleanUrl = `${window.location.origin}/mypage/login`;
      window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(cleanUrl)}`;
    } else {
      const query = new URLSearchParams(queryObject);
      const popup = window.open(`${GOOGLE.authUrl}?${query}`, '_blank', 'width=400, height=650');
      if (!popup) return;
      setPopup({ type: 'GOOGLE', window: popup });
    }
  };

  return (
    <button
      type="button"
      className="border border-gray-100 rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-white shadow text-black"
      onClick={openGoogleLoginPopup}
    >
      <GoogleIcon />
      <div className="text-black typo-title-16-medium">구글 시작하기</div>
    </button>
  );
};

export default GoogleLoginButton;
