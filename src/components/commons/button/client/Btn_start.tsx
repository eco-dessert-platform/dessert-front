import React, { MouseEvent } from 'react';
import Yellow from '@/components/commons/button/assets/icn_star_yellow.svg';
import Gray from '@/components/commons/button/assets/icn_star_gray.svg';

interface ButtonProps {
  isLiked: boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

function BtnStar({ isLiked, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={isLiked ? 'animate-pop' : ''}>
      {isLiked ? <Yellow /> : <Gray />}
    </button>
  );
}

export default BtnStar;
