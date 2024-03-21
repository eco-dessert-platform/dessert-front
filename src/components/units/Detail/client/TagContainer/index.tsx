'use client';

import { transformTagToKr } from '@/commons/constants/transfromTag';

interface TagContainerProps {
  tag: string;
}

function TagContainer({ tag }: TagContainerProps) {
  tag = transformTagToKr(tag);
  return (
    <div className="h-[21px] bg-white rounded border border-solid border-gray-200 justify-center items-center gap-1 inline-flex">
      <span className="text-gray-600 px-[6px] py-[2px] leading-150 text-11 font-normal">{tag}</span>
    </div>
  );
}

export default TagContainer;
