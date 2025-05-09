'use client';

import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';
import { CheckIcon } from '../icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const CheckBoxNewver = (
  { className, onBeforeInput, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <div role="checkbox" aria-checked={props.checked} className={cn('relative', className)}>
    <input
      ref={ref}
      type="checkbox"
      className="opacity-0 absolute size-full cursor-pointer"
      {...props}
    />
    {props.checked ? <CheckIcon shape="checkbox-on" /> : <CheckIcon shape="checkbox-off" />}
  </div>
);

export default forwardRef(CheckBoxNewver);
