import React, { MouseEvent } from 'react';
import Yellow from '@/components/commons/button/assets/icn_star_yellow.svg';
import Gray from '@/components/commons/button/assets/icn_star_gray.svg';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  isLiked: boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

function BtnStar({ isLiked, onClick, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={twMerge(isLiked ? 'animate-pop' : '', className)}>
      {isLiked ? <Yellow /> : <Gray />}
    </button>
  );
}

export default BtnStar;
