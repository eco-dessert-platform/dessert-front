'use client';

import ReviewWriteForm from '@/domains/review/components/ReviewWriteForm';
import useUpdateReviewMutation from '@/domains/review/queries/useUpdateReviewMutation';
import { IReviewWriteForm } from '@/domains/review/types/review';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { SubmitErrorHandler, SubmitHandler, useFormContext } from 'react-hook-form';

interface Props {
  progress: 1 | 2;
}

const ReviewUpdateForm = ({ progress }: Props) => {
  const { mutate } = useUpdateReviewMutation();
  const { handleSubmit } = useFormContext<IReviewWriteForm>();
  const { openToast } = useToastNewVer();

  const onValidSubmit: SubmitHandler<IReviewWriteForm> = ({ badges, images, ...rest }) => {
    mutate({
      urls: images.urls,
      badges: [badges.taste, badges.brix, badges.texture],
      ...rest
    });
  };

  const onInvalidSubmit: SubmitErrorHandler<IReviewWriteForm> = () => {
    openToast({ message: '값을 올바르게 입력해주세요.' });
  };

  return (
    <ReviewWriteForm progress={progress} onSumbmit={handleSubmit(onValidSubmit, onInvalidSubmit)} />
  );
};

export default ReviewUpdateForm;
