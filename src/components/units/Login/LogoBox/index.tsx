'use client';

import LogoSub from '@/commons/assets/logo_sub.svg';

const LogoBox = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      <LogoSub />
      <div>
        <div className="text-16 leading-150 tracking-tight-4 font-semibold text-center text-gray-900 ">
          안녕하세요👋 빵그리의 오븐입니다 :)
        </div>
        <div className="text-14 leading-150 tracking-tight-6 font-normal text-center text-gray-800">
          여러분들이 원하는 비건 베이커리들을 함께 만나봐요!
        </div>
      </div>
    </div>
  );
};

export default LogoBox;
