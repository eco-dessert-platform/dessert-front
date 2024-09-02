'use client';

import React, { ForwardedRef, forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '@/shared/utils/cn';
import { CheckIcon } from '../icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  label?: string;
}

const CheckBoxNewver = (
  { label, title, className, onBeforeInput, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputId = useId();
  const hasLabel = !!(title || label);

  return (
    <label
      htmlFor={inputId}
      className={cn(
        'flex items-center box-content gap-[12px] text-gray-900 typo-title-14-regular cursor-pointer rounded-[8px]',
        hasLabel && 'p-[10px] border border-transparent',
        hasLabel && !props.checked && 'bg-redGray-30',
        hasLabel && props.checked && 'bg-secondaryPink border border-primaryOrangeRed',
        className
      )}
    >
      <input id={inputId} ref={ref} type="checkbox" hidden {...props} />

      {props.checked ? <CheckIcon shape="checkbox-on" /> : <CheckIcon shape="checkbox-off" />}

      {hasLabel && (
        <div className="flex flex-col">
          {title && (
            <div
              className={cn(
                'typo-title-14-semibold text-gray',
                props.checked && 'text-primaryOrangeRed'
              )}
            >
              {title}
            </div>
          )}
          {label && (
            <div
              className={cn(
                'typo-title-14-regular text-gray-700',
                props.checked && 'typo-title-14-semibold text-primaryOrangeRed'
              )}
            >
              {label}
            </div>
          )}
        </div>
      )}
    </label>
  );
};

export default forwardRef(CheckBoxNewver);
