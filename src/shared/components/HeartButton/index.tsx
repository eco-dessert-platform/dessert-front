'use client';

import { ButtonHTMLAttributes, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { isLoggedinState } from '@/shared/atoms/login';

import { HeartIcon } from '../icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  shape?: 'shadow' | 'nav' | 'default';
}

const HeartButton = ({ isActive, shape = 'default', onClick, ...rest }: Props) => {
  const activeClass = isActive ? 'on' : 'off';

  const [isPopping, setIsPopping] = useState(false);
  const isLoggedIn = useRecoilValue(isLoggedinState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoggedIn) {
      e.preventDefault();
      if (onClick) onClick(e);
      return;
    }
    setIsPopping(true);

    setTimeout(() => {
      setIsPopping(false);
    }, 300);
  };

  const popClass = isPopping ? 'animate-heart-pop' : '';
  return (
    <button type="button" onClick={handleClick} className={popClass} {...rest}>
      <HeartIcon shape={`${shape}-${activeClass}`} />
    </button>
  );
};

export default HeartButton;
