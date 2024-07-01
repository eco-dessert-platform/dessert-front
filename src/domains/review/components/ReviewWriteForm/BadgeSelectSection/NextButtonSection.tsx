'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { useFormContext } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';
import { MouseEventHandler } from 'react';

interface Props {
  onNextClick: MouseEventHandler<HTMLButtonElement>;
}
const NextButtonSection = ({ onNextClick }: Props) => {
  const { getValues } = useFormContext<IReviewWriteForm>();
  const { badges } = getValues();
  const isAllBadgeSelected = Object.values(badges).every((badge) => badge);

  return (
    <div className="fixed z-bottomButton left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[600px] bg-white">
      <PaddingWrapper>
        <ButtonNewver
          color="black"
          className="w-full"
          onClick={onNextClick}
          disabled={!isAllBadgeSelected}
        >
          다음
        </ButtonNewver>
      </PaddingWrapper>
    </div>
  );
};

export default NextButtonSection;
