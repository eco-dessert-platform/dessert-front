'use client';

import { ButtonHTMLAttributes, useState } from 'react';

import { HeartIcon } from '../icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  shape?: 'shadow' | 'nav' | 'default';
}

const HeartButton = ({ isActive, shape = 'default', onClick, ...rest }: Props) => {
  const activeClass = isActive ? 'on' : 'off';

  const [isPopping, setIsPopping] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPopping(true);
    if (onClick) onClick(e);
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
