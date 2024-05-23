'use client';

import { FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header';

interface ReviewCreateLayoutProps {
  badgeSelect: React.ReactNode;
  starRatingSelect: React.ReactNode;
}

const ReviewCreateLayout = ({ badgeSelect, starRatingSelect }: ReviewCreateLayoutProps) => {
  const searchParams = useSearchParams();
  const progress = searchParams.get('progress');

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: mutate 함수 호출
  };

  if (progress !== '1' && progress !== '2') throw new Error();

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />
      <form onSubmit={handleFormSubmit}>{progress === '1' ? badgeSelect : starRatingSelect}</form>
    </>
  );
};

export default ReviewCreateLayout;
