'use client';

import { useRecoilValue } from 'recoil';
import { starRatingState } from '@/domains/review/atoms';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Button from '@/shared/components/Button';

const CompleteButtonSection = () => {
  const starRating = useRecoilValue(starRatingState);
  const isStarRatingSelected = starRating > 0;

  return (
    <div className="fixed z-bottomButton left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[600px] bg-white">
      <PaddingWrapper>
        <Button
          variants="primary-black"
          type="submit"
          disabled={!isStarRatingSelected}
          className={`${isStarRatingSelected ? 'bg-gray-900 cursor-pointer' : 'bg-gray-300 cursor-default'}`}
        >
          완료
        </Button>
      </PaddingWrapper>
    </div>
  );
};

export default CompleteButtonSection;
