'use client';

import Header from '@/shared/components/Header';
import ReviewCreateForm from '@/domains/review/components/ReviewCreatForm';
import { notFound } from 'next/navigation';
import useCreateReviewMutation from '@/domains/review/queries/useCreateReviewMutation';
import { SubmitErrorHandler, SubmitHandler, useFormContext } from 'react-hook-form';
import { IReviewCreateForm } from '@/domains/review/types/review';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

interface ReviewCreatePageProps {
  params: { productId: string; progress: string };
}

const ReviewCreatePage = ({ params }: ReviewCreatePageProps) => {
  const progress = Number(params.progress);
  const { handleSubmit } = useFormContext<IReviewCreateForm>();
  const { openToast } = useToastNewVer();
  const { mutate } = useCreateReviewMutation();

  if (!(progress === 1 || progress === 2)) notFound();

  const onSubmitValid: SubmitHandler<IReviewCreateForm> = ({ images, badges, ...rest }) => {
    mutate({
      badges: [badges.brix, badges.taste, badges.texture],
      urls: images.urls,
      ...rest
    });
  };

  const onSubmitInvalid: SubmitErrorHandler<IReviewCreateForm> = () => {
    openToast({ message: '값을 올바르게 입력해주세요.' });
  };

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />
      <ReviewCreateForm
        progress={progress}
        onSumbmit={handleSubmit(onSubmitValid, onSubmitInvalid)}
      />
    </>
  );
};

export default ReviewCreatePage;
