'use client';

import { useRouter, usePathname } from 'next/navigation';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { useFormContext } from 'react-hook-form';
import { IReviewCreateForm } from '@/domains/review/types/review';

const NextButtonSection = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { getValues } = useFormContext<IReviewCreateForm>();

  const { badges } = getValues();
  const isAllBadgeSelected = Object.values(badges).every((badge) => badge);

  const handleButtonClick = () => {
    if (!isAllBadgeSelected) return;
    push(`${pathname}?progress=2`);
  };

  return (
    <div className="fixed z-bottomButton left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[600px] bg-white">
      <PaddingWrapper>
        <ButtonNewver
          color="black"
          className="w-full"
          onClick={handleButtonClick}
          disabled={!isAllBadgeSelected}
        >
          다음
        </ButtonNewver>
      </PaddingWrapper>
    </div>
  );
};

export default NextButtonSection;
