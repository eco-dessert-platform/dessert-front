'use client';

import KakaoIcon from '../assets/kakao_logo.svg';
import { KAKAO } from '../constants/socialLogin';

const KakaoLoginButton = () => {
  const queryObject = {
    client_id: KAKAO.client_id,
    redirect_uri: KAKAO.redirect_uri,
    response_type: KAKAO.response_type
  };

  const redirectToKakaoLoginPage = () => {
    const query = new URLSearchParams(queryObject);
    window.location.assign(`${KAKAO.authUrl}?${query}`);
  };

  return (
    <button
      type="button"
      className="rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-kakao shadow text-black"
      onClick={redirectToKakaoLoginPage}
    >
      <KakaoIcon />
      <div className="text-black/[0.85] typo-title-16-medium">카카오톡 시작하기</div>
    </button>
  );
};

export default KakaoLoginButton;
