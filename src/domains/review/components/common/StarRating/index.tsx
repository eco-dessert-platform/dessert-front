'use client';

import { useId, InputHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { RatingType, StarSizeType } from '@/domains/review/types/starRating';
import Stars from './Stars';

interface StarRatingProps extends InputHTMLAttributes<HTMLInputElement> {
  starSize?: StarSizeType;
  editable?: boolean;
}

const StarRating = (
  { value, onChange, starSize = 'small', editable = false, ...props }: StarRatingProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const id = useId();

  return (
    <label htmlFor={id} aria-label="별점" className="block relative max-w-fit">
      <Stars rating={Number(value) as RatingType} size={starSize} />
      <input
        ref={ref}
        type="range"
        value={value}
        onChange={onChange}
        id={id}
        min={0}
        max={5}
        step={0.5}
        disabled={!editable}
        className={`absolute left-0 top-0 w-full h-full opacity-0 ${editable ? 'cursor-pointer' : ''}`}
        {...props}
      />
    </label>
  );
};

export default forwardRef(StarRating);
