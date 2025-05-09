'use client';

import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/shared/utils/cn';
import { CheckIcon } from '../icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const RadioNewver = (
  { className, onBeforeInput, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <div role="radio" aria-checked={props.checked} className={cn('relative', className)}>
    <input
      ref={ref}
      type="radio"
      className="opacity-0 absolute size-full cursor-pointer"
      {...props}
    />
    {props.checked ? <CheckIcon shape="radio-on" /> : <CheckIcon shape="radio-off" />}
  </div>
);

export default forwardRef(RadioNewver);
