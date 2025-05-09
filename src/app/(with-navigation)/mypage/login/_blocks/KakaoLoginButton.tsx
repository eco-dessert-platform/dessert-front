'use client';

import { useSetRecoilState } from 'recoil';
import { socialLoginPopupState } from '@/domains/user/atoms/login';
import KakaoIcon from '@/domains/user/assets/kakao_logo.svg';
import { KAKAO } from '@/domains/user/constants/socialLogin';

const KakaoLoginButton = () => {
  const setPopup = useSetRecoilState(socialLoginPopupState);
  const queryObject = {
    client_id: KAKAO.client_id,
    redirect_uri: KAKAO.redirect_uri,
    response_type: KAKAO.response_type
  };

  const openKakaoLoginPopup = () => {
    const query = new URLSearchParams(queryObject);
    const popup = window.open(`${KAKAO.authUrl}?${query}`, '_blank', 'width=400, height=650');
    if (!popup) return;
    setPopup({ type: 'KAKAO', window: popup });
  };

  return (
    <button
      type="button"
      className="rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-kakao shadow text-black"
      onClick={openKakaoLoginPopup}
    >
      <KakaoIcon />
      <div className="text-black/[0.85] typo-title-16-medium">카카오톡 시작하기</div>
    </button>
  );
};

export default KakaoLoginButton;
