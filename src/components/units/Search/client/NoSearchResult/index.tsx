'use client';

import None from '@/commons/assets/sad_charac.svg';

const NoSearchResult = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[50vh] gap-[2px]">
      <None />
      <p className="text-gray-500 text-center text-14 font-normal leading-150 tracking-tight-2">
        검색 결과가 없어요 😥 <br /> 다른 키워드로 검색해보세요!
      </p>
    </div>
  );
};

export default NoSearchResult;
