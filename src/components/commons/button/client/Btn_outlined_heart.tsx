import React, { MouseEvent } from 'react';
import Red from '@/components/commons/button/assets/icn_outlined_heart_red.svg';
import Gray from '@/components/commons/button/assets/icn_outlined_heart_gray.svg';

interface ButtonProps {
  isLiked: boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

function BtnOutlinedHeart({ isLiked, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border border-solid border-gray-200 rounded-full p-[13px] ${isLiked ? 'animate-pop' : ''}`}
    >
      {isLiked ? <Red /> : <Gray />}
    </button>
  );
}

export default BtnOutlinedHeart;
