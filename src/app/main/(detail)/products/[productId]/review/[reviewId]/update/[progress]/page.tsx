'use client';

import { notFound } from 'next/navigation';
import { SubmitErrorHandler, SubmitHandler, useFormContext } from 'react-hook-form';
import Header from '@/shared/components/Header';
import ReviewCreateForm from '@/domains/review/components/ReviewCreatForm';
import { IReviewCreateForm } from '@/domains/review/types/review';
import useUpdateReviewMutation from '@/domains/review/queries/useUpdateReviewMutation';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

interface ReviewUpdatePageProps {
  params: { reviewId: string; productId: string; progress: string };
}

const ReviewUpdatePage = ({ params }: ReviewUpdatePageProps) => {
  const progress = Number(params.progress);
  const { mutate } = useUpdateReviewMutation();
  const { handleSubmit } = useFormContext<IReviewCreateForm>();
  const { openToast } = useToastNewVer();

  if (!(progress === 1 || progress === 2)) notFound();

  const onValidSubmit: SubmitHandler<IReviewCreateForm> = ({ badges, images, ...rest }) => {
    mutate({
      urls: images.urls,
      badges: [badges.taste, badges.brix, badges.texture],
      ...rest
    });
  };

  const onInvalidSubmit: SubmitErrorHandler<IReviewCreateForm> = () => {
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
        onSumbmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
      />
    </>
  );
};

export default ReviewUpdatePage;
