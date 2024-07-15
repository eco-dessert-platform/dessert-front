'use client';

import ReviewWriteForm from '@/domains/review/components/ReviewWriteForm';
import useUpdateReviewMutation from '@/domains/review/queries/useUpdateReviewMutation';
import { IReviewWriteForm } from '@/domains/review/types/review';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { useParams, useRouter } from 'next/navigation';
import { SubmitErrorHandler, SubmitHandler, useFormContext } from 'react-hook-form';

interface Props {
  progress: 1 | 2;
}

const ReviewUpdateForm = ({ progress }: Props) => {
  const { mutate } = useUpdateReviewMutation();
  const { handleSubmit } = useFormContext<IReviewWriteForm>();
  const { openToast } = useToastNewVer();
  const { push } = useRouter();
  const { reviewId, productId } = useParams<{ productId: string; reviewId: string }>();

  const onValidSubmit: SubmitHandler<IReviewWriteForm> = ({ badges, images, ...rest }) => {
    const review = {
      urls: images.urls || null,
      badges: [badges.taste, badges.brix, badges.texture].map((badge) => badge.toUpperCase()),
      ...rest
    };
    mutate({
      review,
      id: Number(reviewId)
    });
  };

  const onInvalidSubmit: SubmitErrorHandler<IReviewWriteForm> = () => {
    openToast({ message: '값을 올바르게 입력해주세요.' });
  };

  const onNextClick = () => {
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
