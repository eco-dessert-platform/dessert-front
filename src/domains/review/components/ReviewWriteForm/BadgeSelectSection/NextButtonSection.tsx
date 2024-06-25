'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { useFormContext } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';
import PATH from '@/shared/constants/path';

const NextButtonSection = () => {
  const { push } = useRouter();
  const { getValues } = useFormContext<IReviewWriteForm>();
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');

  const { badges } = getValues();
  const isAllBadgeSelected = Object.values(badges).every((badge) => badge);

  const handleButtonClick = () => {
    if (!isAllBadgeSelected) return;
    push(PATH.reviewCreate({ productId: Number(productId), progress: 2 }));
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
