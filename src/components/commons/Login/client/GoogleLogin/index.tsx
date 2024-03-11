'use client';

import GoogleIcon from '@/components/commons/Login/client/GoogleLogin/assets/google_logo.svg';

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    window.location.assign(`${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/google`);
  };

  return (
    <div className="w-auto h-[52px] p-4 bg-white rounded-[10px] shadow border border-solid border-neutral-100 flex-col justify-center items-center gap-4 inline-flex">
      <button className="inline-flex items-center justify-start gap-2" onClick={handleGoogleLogin}>
        <GoogleIcon />
        <div className="text-black text-base font-medium font-['Pretendard'] leading-normal">
          구글 시작하기
        </div>
      </button>
    </div>
  );
};

export default GoogleLogin;
