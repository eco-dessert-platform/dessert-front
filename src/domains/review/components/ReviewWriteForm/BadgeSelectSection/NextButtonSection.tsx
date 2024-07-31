'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { useFormContext } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';
import { MouseEventHandler } from 'react';
import FixedBottom from '@/shared/components/FixedBottom';

interface Props {
  onNextClick: MouseEventHandler<HTMLButtonElement>;
}
const NextButtonSection = ({ onNextClick }: Props) => {
  const { getValues } = useFormContext<IReviewWriteForm>();
  const { badges } = getValues();
  const isAllBadgeSelected = Object.values(badges).every((badge) => badge);

  return (
    <FixedBottom>
      <PaddingWrapper className="bg-white">
        <ButtonNewver
          color="black"
          className="w-full"
          onClick={onNextClick}
          disabled={!isAllBadgeSelected}
        >
          다음
        </ButtonNewver>
      </PaddingWrapper>
    </FixedBottom>
  );
};

export default NextButtonSection;
