'use client';

import GoogleIcon from '@/domains/user/assets/google_logo.svg';

const GoogleLoginButton = () => (
  <button
    type="button"
    className="border border-gray-100 rounded-[10px] flex gap-[8px] items-center justify-center h-[52px] bg-white shadow text-black"
    onClick={() => {}}
  >
    <GoogleIcon />
    <div className="text-black typo-title-16-medium">구글 시작하기</div>
  </button>
);

export default GoogleLoginButton;
