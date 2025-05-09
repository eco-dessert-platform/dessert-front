'use client';

import { ButtonHTMLAttributes } from 'react';

import { HeartIcon } from '../icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  shape?: 'shadow' | 'nav' | 'default';
}

const HeartButton = ({ isActive, shape = 'default', onClick, ...rest }: Props) => {
  const activeClass = isActive ? 'on' : 'off';

  return (
    <button type="button" onClick={onClick} {...rest}>
      <HeartIcon shape={`${shape}-${activeClass}`} />
    </button>
  );
};

export default HeartButton;
