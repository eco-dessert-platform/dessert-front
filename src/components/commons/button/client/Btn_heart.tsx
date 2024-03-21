import React, { MouseEvent } from 'react';
import Red from '@/components/commons/button/assets/icn_heart_red.svg';
import Gray from '@/components/commons/button/assets/icn_heart_gray.svg';

interface ButtonProps {
  isLiked: boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

function BtnHeart({ isLiked, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={isLiked ? 'animate-pop' : ''}>
      {isLiked ? <Red /> : <Gray />}
    </button>
  );
}

export default BtnHeart;
