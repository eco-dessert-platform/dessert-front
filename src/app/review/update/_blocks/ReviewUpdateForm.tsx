'use client';

import ReviewWriteForm from '@/domains/review/components/ReviewWriteForm';
import useUpdateReviewMutation from '@/domains/review/queries/useUpdateReviewMutation';
import { IReviewWriteForm } from '@/domains/review/types/review';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { useRouter, useSearchParams } from 'next/navigation';
import { SubmitErrorHandler, SubmitHandler, useFormContext } from 'react-hook-form';

interface Props {
  progress: 1 | 2;
}

const ReviewUpdateForm = ({ progress }: Props) => {
  const { mutate } = useUpdateReviewMutation();
  const { handleSubmit } = useFormContext<IReviewWriteForm>();
  const { openToast } = useToastNewVer();
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const onValidSubmit: SubmitHandler<IReviewWriteForm> = ({ badges, images, ...rest }) => {
    const reviewId = Number(searchParams.get('reviewId'));
    const review = {
      urls: images.urls,
      badges: [badges.taste, badges.brix, badges.texture].map((badge) => badge.toUpperCase()),
      ...rest
    };
    mutate({
      review,
      id: reviewId
    });
  };

  const onInvalidSubmit: SubmitErrorHandler<IReviewWriteForm> = () => {
    openToast({ message: '값을 올바르게 입력해주세요.' });
  };

  const onNextClick = () => {
    const productId = searchParams.get('productId');
    const reviewId = searchParams.get('reviewId');
    push(
      PATH.reviewUpdate({ productId: Number(productId), progress: 2, reviewId: Number(reviewId) })
    );
  };

  return (
    <ReviewWriteForm
      progress={progress}
      onNextClick={onNextClick}
      onSumbmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
    />
  );
};

export default ReviewUpdateForm;
