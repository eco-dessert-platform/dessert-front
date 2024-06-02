'use client';

import { FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header';
import usePostReviewQuery from '@/domains/review/queries/usePostReviewQuery';
import { useRecoilValue } from 'recoil';
import { reviewDataState } from '@/domains/review/atoms';

interface ReviewCreateLayoutProps {
  badgeSelect: React.ReactNode;
  starRatingSelect: React.ReactNode;
  params: { productId: string };
}

const ReviewCreateLayout = ({ badgeSelect, starRatingSelect, params }: ReviewCreateLayoutProps) => {
  const searchParams = useSearchParams();
  const progress = searchParams.get('progress');

  const reviewData = useRecoilValue(reviewDataState);

  const { mutate } = usePostReviewQuery();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ ...reviewData, boardId: Number(params.productId) });
  };

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progress ?? 1}/2</span>}
        back
      />
      <form onSubmit={handleFormSubmit}>{progress !== '2' ? badgeSelect : starRatingSelect}</form>
    </>
  );
};

export default ReviewCreateLayout;
