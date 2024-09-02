'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { useFormContext } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';
import { useParams, useRouter } from 'next/navigation';
import PATH from '@/shared/constants/path';

const ButtonSection = () => {
  const { progress, productId, reviewId } = useParams<{
    productId: string;
    progress: '1' | '2';
    reviewId: string;
  }>();
  const { push } = useRouter();
  const {
    formState: { isValid }
  } = useFormContext<IReviewWriteForm>();

  const config = {
    '1': {
      children: '다음',
      type: 'button',
      onClick: () =>
        push(
          PATH.reviewUpdate({
            productId: Number(productId),
            progress: 2,
            reviewId: Number(reviewId)
          })
        )
    },
    '2': {
      children: '완료',
      type: 'submit',
      onClick: undefined
    }
  } as const;

  return (
    <div className="w-full max-w-[600px] bg-white">
      <PaddingWrapper>
        <ButtonNewver
          form="review-update-form"
          color="black"
          disabled={!isValid}
          className="w-full"
          {...config[progress]}
        />
      </PaddingWrapper>
    </div>
  );
};

export default ButtonSection;