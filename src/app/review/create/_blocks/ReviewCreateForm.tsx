'use client';

import ReviewWriteForm from '@/domains/review/components/ReviewWriteForm';
import useCreateReviewMutation from '@/domains/review/queries/useCreateReviewMutation';
import { SubmitErrorHandler, SubmitHandler, useFormContext } from 'react-hook-form';
import { IReviewWriteForm } from '@/domains/review/types/review';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

interface Props {
  progress: 1 | 2;
}

const ReviewCreateForm = ({ progress }: Props) => {
  const { handleSubmit } = useFormContext<IReviewWriteForm>();
  const { openToast } = useToastNewVer();
  const { mutate } = useCreateReviewMutation();

  const onSubmitValid: SubmitHandler<IReviewWriteForm> = ({ images, badges, ...rest }) => {
    mutate({
      badges: [badges.brix, badges.taste, badges.texture],
      urls: images.urls,
      ...rest
    });
  };

  const onSubmitInvalid: SubmitErrorHandler<IReviewWriteForm> = () => {
    openToast({ message: '값을 올바르게 입력해주세요.' });
  };

  return (
    <ReviewWriteForm progress={progress} onSumbmit={handleSubmit(onSubmitValid, onSubmitInvalid)} />
  );
};

export default ReviewCreateForm;
