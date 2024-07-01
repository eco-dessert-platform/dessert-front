'use client';

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/shared/components/Header';
import ReviewUpdateForm from './_blocks/ReviewUpdateForm';
import ReviewUpdateFormProvider from './_blocks/ReviewUpdateFormProvider';

interface ReviewUpdatePageProps {
  searchParams: { reviewId: string | null; productId: string | null; progress: string | null };
}

const ReviewUpdatePage = ({
  searchParams: { progress, reviewId, productId }
}: ReviewUpdatePageProps) => {
  const progressNum = Number(progress);

  if (!productId || !reviewId) throw new Error('비정상적인 접근');
  if (!(progressNum === 1 || progressNum === 2)) notFound();

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />
      <Suspense>
        <ReviewUpdateFormProvider>
          <ReviewUpdateForm progress={progressNum} />
        </ReviewUpdateFormProvider>
      </Suspense>
    </>
  );
};

export default ReviewUpdatePage;
