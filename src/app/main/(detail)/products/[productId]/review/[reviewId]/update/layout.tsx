'use client';

import { FormEvent, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { reviewDataState } from '@/domains/review/atoms';
import { ReviewDataType } from '@/domains/review/types/review';
import Header from '@/shared/components/Header';

const REVIEW_DATA: ReviewDataType = {
  badges: {
    taste: 'good',
    brix: 'plain',
    texture: 'soft'
  },
  rate: 3,
  content: 'test test',
  photos: [
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,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'
  ]
};

interface ReviewUpdateLayoutProps {
  badgeSelect: React.ReactNode;
  starRatingSelect: React.ReactNode;
}

const ReviewUpdateLayout = ({ badgeSelect, starRatingSelect }: ReviewUpdateLayoutProps) => {
  const searchParams = useSearchParams();
  const progress = searchParams.get('progress');

  // TODO: REVIEW_DATA(mock data) -> useGetReviewQuery 호출해 actual data 받아오기 + recoil에 저장
  const setReviewData = useSetRecoilState(reviewDataState);

  useEffect(() => {
    setReviewData(REVIEW_DATA);
  }, [setReviewData]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: mutate 함수 호출
  };

  if (progress !== '1' && progress !== '2') throw new Error();

  return (
    <>
      <Header
        title="리뷰 수정"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />
      <form onSubmit={handleFormSubmit}>{progress === '1' ? badgeSelect : starRatingSelect}</form>
    </>
  );
};

export default ReviewUpdateLayout;