'use client';

import React, { ChangeEvent, forwardRef, ReactNode, useId } from 'react';

import { twMerge } from 'tailwind-merge';

import { CheckIcon } from '../icons';

interface RadioProps {
  isChecked?: boolean;
  onChange?: (_e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { isChecked = false, onChange, name = '', value = '', required = false, children, className },
    ref
  ) => {
    const id = useId();

    return (
      <label
        htmlFor={id}
        className={twMerge(
          'flex items-center gap-[6px] text-gray-900 typo-title-14-regular cursor-pointer',
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
          ref={ref} // ref를 input에 전달
        />
        <span>{isChecked ? <CheckIcon shape="radio-on" /> : <CheckIcon shape="radio-off" />}</span>
        {children}
      </label>
    );
  }
);

export default Radio;
