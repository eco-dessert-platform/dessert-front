'use client';

import React, { ChangeEvent, ReactNode, useId } from 'react';
import Off from '../assets/icn_check_off.svg';
import On from '../assets/icn_check_on.svg';
import { twMerge } from 'tailwind-merge';

interface CheckBoxProps {
  isChecked: boolean;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

const CheckBox = ({
  isChecked = false,
  onChange,
  name = '',
  value = '',
  required = false,
  children,
  className
}: CheckBoxProps) => {
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
        type="checkbox"
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

export default CheckBox;
