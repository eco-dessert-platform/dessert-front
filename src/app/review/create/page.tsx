'use client';

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/shared/components/Header';
import ReviewCreatFormProvider from './_blocks/ReviewCreatFormProvider';
import ReviewCreateForm from './_blocks/ReviewCreateForm';

interface ReviewCreatePageProps {
  searchParams: { productId: string | null; progress: string | null };
}

const ReviewCreatePage = ({ searchParams: { productId, progress } }: ReviewCreatePageProps) => {
  const progressNum = Number(progress);

  if (!(progressNum === 1 || progressNum === 2)) notFound();
  if (!productId) throw new Error('productId is invalid');

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progressNum}/2</span>}
        back
      />
      <Suspense>
        <ReviewCreatFormProvider>
          <ReviewCreateForm progress={progressNum} />
        </ReviewCreatFormProvider>
      </Suspense>
    </>
  );
};

export default ReviewCreatePage;
