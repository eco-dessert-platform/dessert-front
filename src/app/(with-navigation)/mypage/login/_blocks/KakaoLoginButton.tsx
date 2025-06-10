'use client';

import { useSetAtom } from 'jotai';
import { socialLoginPopupAtom } from '@/domains/user/atoms/login';
import KakaoIcon from '@/domains/user/assets/kakao_logo.svg';
import { KAKAO } from '@/domains/user/constants/socialLogin';

const KakaoLoginButton = () => {
  const setPopup = useSetAtom(socialLoginPopupAtom);
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
      className="bg-kakao flex h-[52px] items-center justify-center gap-[8px] rounded-[10px] text-black shadow-sm"
      onClick={openKakaoLoginPopup}
    >
      <KakaoIcon />
      <div className="typo-title-16-medium text-black/[0.85]">카카오톡 시작하기</div>
    </button>
  );
};

export default KakaoLoginButton;
