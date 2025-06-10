'use client';

import { BADGE } from '@/domains/review/constants/badge';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ReviewBadge from '@/domains/review/components/ReviewBadge';
import { useFormContext } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';

const BadgeSection = () => {
  const { watch, register } = useFormContext<IReviewWriteForm>();

  const badges = Object.values(BADGE);

  return (
    <PaddingWrapper className="pt-0">
      <div className="grid max-w-[600px] grid-cols-2 grid-rows-3 gap-[10px]">
        {badges.map(({ kind, text, id }) => (
          <label key={id} htmlFor={id} aria-label={text}>
            <ReviewBadge
              shape={id}
              isActive={watch('badges')?.[kind] === id}
              className="cursor-pointer"
            />
            <input
              id={id}
              type="radio"
              value={id}
              className="appearance-none"
              {...register(`badges.${kind}`, { required: true })}
            />
          </label>
        ))}
      </div>
    </PaddingWrapper>
  );
};

export default BadgeSection;
