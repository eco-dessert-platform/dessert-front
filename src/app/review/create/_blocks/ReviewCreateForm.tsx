'use client';

import ReviewWriteForm from '@/domains/review/components/ReviewWriteForm';
import useCreateReviewMutation from '@/domains/review/queries/useCreateReviewMutation';
import { SubmitErrorHandler, SubmitHandler, useFormContext } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { useRouter, useSearchParams } from 'next/navigation';
import PATH from '@/shared/constants/path';

interface Props {
  progress: 1 | 2;
}

const ReviewCreateForm = ({ progress }: Props) => {
  const { handleSubmit } = useFormContext<IReviewWriteForm>();
  const { openToast } = useToastNewVer();
  const { mutate } = useCreateReviewMutation();
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const onSubmitValid: SubmitHandler<IReviewWriteForm> = ({ images, badges, ...rest }) => {
    mutate({
      badges: [badges.brix, badges.taste, badges.texture].map((badge) => badge.toUpperCase()),
      urls: images.urls,
      ...rest
    });
  };

  const onSubmitInvalid: SubmitErrorHandler<IReviewWriteForm> = () => {
    openToast({ message: '값을 올바르게 입력해주세요.' });
  };

  const onNextClick = () => {
    const productId = searchParams.get('productId');
    push(PATH.reviewCreate({ productId: Number(productId), progress: 2 }));
  };

  return (
    <ReviewWriteForm
      progress={progress}
      onNextClick={onNextClick}
      onSumbmit={handleSubmit(onSubmitValid, onSubmitInvalid)}
    />
  );
};

export default ReviewCreateForm;
