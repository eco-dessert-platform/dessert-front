'use client';

import React, { ChangeEvent, ReactNode, useId } from 'react';
import Off from './assets/icon_radio_off.svg';
import On from './assets/icon_radio_on.svg';
import { twMerge } from 'tailwind-merge';

interface RadioProps {
  isChecked: boolean;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

const Radio = ({
  isChecked = false,
  onChange,
  name = '',
  value = '',
  required = false,
  children,
  className
}: RadioProps) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={twMerge(
        'flex items-center gap-[6px] text-gray-900 text-14 font-normal leading-150 tracking-tight-2 cursor-pointer',
        className
      )}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        required={required}
        hidden
      />
      <span>{isChecked ? <On /> : <Off />}</span>
      {children}
    </label>
  );
};

export default Radio;
