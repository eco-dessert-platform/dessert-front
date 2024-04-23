'use client';

import React, { ChangeEvent, ReactNode, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckIcon } from './icons';

interface CheckBoxProps {
  isChecked: boolean;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  required?: boolean;
  children?: ReactNode;
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

      <span>
        {isChecked ? <CheckIcon shape="checkbox-on" /> : <CheckIcon shape="checkbox-off" />}
      </span>
      {children}
    </label>
  );
};

export default CheckBox;
