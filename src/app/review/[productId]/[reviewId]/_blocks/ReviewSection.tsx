'use client';

import Review from '@/domains/review/components/Review';
import useReviewDetailQuery from '@/domains/review/queries/useReviewDetailQuery';
import React from 'react';

interface Props {
  reviewId: string;
}

const ReviewSection = ({ reviewId }: Props) => {
  const { data } = useReviewDetailQuery(Number(reviewId));
  if (!data) return null;
  const formattedDate = new Date(data.date).toLocaleDateString('ko-KR');

  return <Review {...data} date={formattedDate} usedIn="review-detail" />;
};

export default ReviewSection;
