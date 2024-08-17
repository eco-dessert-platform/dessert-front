'use client';

import GoogleIcon from '@/domains/user/assets/google_logo.svg';
import { GOOGLE } from '@/domains/user/constants/socialLogin';

const GoogleLoginButton = () => {
  const queryObject = {
    client_id: GOOGLE.clientId,
    clientsecret: GOOGLE.clientSecret,
    redirect_uri: GOOGLE.redirectUri,
    response_type: GOOGLE.responseType,
    scope: GOOGLE.scope
  };

  const redirectToGoogleLoginPage = () => {
    const query = new URLSearchParams(queryObject);
    window.location.assign(`${GOOGLE.authUrl}?${query}`);
  };

  return (
    <button
      type="button"
      className="border border-gray-100 rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-white shadow text-black"
      onClick={redirectToGoogleLoginPage}
    >
      <GoogleIcon />
      <div className="text-black typo-title-16-medium">구글 시작하기</div>
    </button>
  );
};

export default GoogleLoginButton;
